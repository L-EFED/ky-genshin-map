// 从 @canvaskit-map/react 中引入 DomLayer 和 MarkerLayer，用于渲染地图上的标记图层
// Import DomLayer and MarkerLayer for rendering markers on the map
import { DomLayer, MarkerLayer } from "@canvaskit-map/react";

// 引入 classNames 用于动态组合 class 名
// Import classNames for conditional CSS class combination
import classNames from "classnames";

// 引入 useState 用于控制加载状态
// Import useState for managing local loading state
import { useState } from "react";

// 引入 valtio 快照 hook 获取响应式状态
// Import useSnapshot from valtio to get reactive state snapshot
import { useSnapshot } from "valtio";

// 引入 zIndex 配置
// Import zIndex config for layering
import { zIndex } from ".";

// 引入标记点排除名称和锚点配置
// Import special area names and anchor position
import { borderlessNames, bottomCenterAnchor } from "./area-item-layer";

// 引入相关状态和操作函数
// Import area marker data structure and state management functions
import { AreaItemMarker, mark, state, unmark } from "./state";

export function ActiveMarkerLayer() {
  // 通过 valtio 获取当前激活的标记点
  // Get the current active marker from global state
  const { activeMarker } = useSnapshot(state);

  // 控制图片是否加载完成
  // Control whether the marker image is loaded
  const [loading, setLoading] = useState(true);

  // 定义图片元素，用于渲染图标
  // Define the image element for the marker
  const image = (
    <img
      class="w-4 block"
      src={require("../../images/active-marker.png")}
      onLoad={() => setLoading(false)} // 图片加载完成后设置 loading 为 false // Set loading to false once image loads
    />
  );

  return (
    <>
      {/* 隐藏的图片用于预加载，避免 MarkerLayer 加载时图像闪烁 */}
      {/* Hidden image for preloading to prevent flicker */}
      <div className="hidden">{image}</div>

      {/* 如果图片加载完成，渲染 MarkerLayer 显示标记点 */}
      {/* Render MarkerLayer only after image is loaded */}
      {!loading && (
        <MarkerLayer
          items={activeMarker ? [activeMarker] : []}
          anchor={bottomCenterAnchor}
          zIndex={zIndex.activeMarker}
        >
          {image}
        </MarkerLayer>
      )}

      {/* 如果有激活的标记，显示信息弹窗 */}
      {/* If a marker is active, show its info window */}
      {activeMarker && (
        <>
          <MarkerInfo {...activeMarker} />
        </>
      )}
    </>
  );
}

// MarkerInfo 组件用于显示点击 marker 后弹出的详细信息窗口
// MarkerInfo component shows the detailed popup info for a marker
function MarkerInfo({ marker, areaItem, x, y }: AreaItemMarker) {
  // 触发刷新时间的获取（可能包含副作用）
  // Trigger potential side effects by accessing refresh time
  areaItem.getRefreshTime();

  // 获取标记状态列表（记录哪些 marker 被“已完成”标记）
  // Get the set of marked marker IDs
  const { marked } = useSnapshot(state);

  let markButton = null;

  // 如果该区域不在“无标记”名单且刷新时间为 0，则显示标记按钮
  // Show mark buttons only for specific markers
  if (
    !borderlessNames.includes(areaItem.getName()) &&
    areaItem.getRefreshTime() == 0
  ) {
    const buttonClass =
      "flex-1 h-full box-border rounded-full text-center border border-solid flex justify-center items-center";

    // 定义两个按钮：“未完成”和“已完成”，并根据当前标记状态切换样式
    // Define the "Incomplete" and "Complete" buttons with conditional styles
    markButton = (
      <div className="h-5 p-0.5 mt-1 rounded-full border border-yellow-900/50 border-solid flex items-center text-xs">
        {/* 未完成按钮 */}
        <div
          className={classNames(
            buttonClass,
            marked.has(marker.getId())
              ? "border-transparent" // 如果已标记，不高亮
              : "bg-yellow-900/40 border-yellow-900/60 text-white" // 高亮显示
          )}
          onClick={() => unmark(marker)}
        >
          未完成
        </div>
        {/* 已完成按钮 */}
        <div
          className={classNames(
            buttonClass,
            marked.has(marker.getId())
              ? "bg-cyan-600/90 border-cyan-900/80 text-white" // 高亮“已完成”状态
              : "border-transparent"
          )}
          onClick={() => mark(marker)}
        >
          已完成
        </div>
      </div>
    );
  }

  return (
    // 使用 DomLayer 将弹窗定位到地图上的对应位置
    // Use DomLayer to position the popup on the map
    <DomLayer
      x={x}
      y={y}
      className="relative top-[calc(-100%-2.5rem)] -left-1/2 w-64 text-sm"
    >
      {/* 弹窗主体内容 */}
      <div className="bg-orange-50 shadow-lg rounded-lg flex flex-col gap-2 p-3 marker relative">
        {/* 标题 */}
        <div className="text-gray-900">{marker.getTitle()}</div>
        {/* 内容文本 */}
        <div className="text-gray-500 text-xs">{marker.getContent()}</div>
        {/* 图片（如果有） */}
        {marker.getPicture() && (
          <img className="w-full rounded" src={marker.getPicture()} />
        )}
        {/* 标记按钮 */}
        {markButton}
      </div>
    </DomLayer>
  );
}
