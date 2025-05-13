// 导入所需的 CanvaKit 地图图层组件、工具函数、状态管理相关钩子及自定义组件等
import { DomLayer, ImageLayer } from "@canvaskit-map/react";
import classNames from "classnames";
import { useMemo, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { zIndex } from "."; // 引入 zIndex 配置
import { UndergroundMap } from "../data_pb"; // 引入地下地图相关数据模型
import { store } from "../store"; // 引入全局状态管理 store
import { MaskLayer } from "./mask-layer"; // 引入遮罩层组件
import { state } from "./state"; // 引入组件状态管理 state

// 地下地图图层组件，用于控制和展示地下地图的分层显示逻辑
export function UndergroundLayer() {
  // 获取全局状态中的地下地图相关状态（是否启用、当前激活的地下地图）
  const { undergroundEnabled, activeUndergroundMap } = useSnapshot(state);
  // 获取地图数据状态
  const { mapData } = useSnapshot(store);

  // 当手动开启全局分层地图时的渲染逻辑
  if (undergroundEnabled) {
    return (
      <>
        <MaskLayer /> {/* 渲染遮罩层 */}
        {/* 遍历所有地下地图并渲染对应的地下地图项目组件 */}
        {mapData.getUndergroundMapList().map((i) => {
          return <UndergroundMapItem key={i.getId()} undergroundMap={i} />;
        })}
      </>
    );
  }

  // 当由当前选中点位触发地下分层地图时的渲染逻辑
  if (activeUndergroundMap) {
    // 根据激活的地下地图查找对应的完整地下地图数据
    let undergroundMap = mapData
      .getUndergroundMapList()
      .find((i) => i.getChildList().find((i) => i == activeUndergroundMap));
    if (undergroundMap) {
      return (
        <>
          <MaskLayer /> {/* 渲染遮罩层 */}
          {/* 渲染特定的地下地图项目组件，传入当前激活的地下地图作为参数 */}
          <UndergroundMapItem
            key={activeUndergroundMap.getId()}
            undergroundMap={undergroundMap}
            current={activeUndergroundMap}
          />
        </>
      );
    }
  }
  // 若以上两种情况均不满足，则不渲染任何内容
  return null;
}

// 地下地图项目组件的属性接口定义
interface UndergroundMapProps {
  undergroundMap: UndergroundMap; // 地下地图数据
  current?: UndergroundMap; // 可选的当前激活地下地图
}

// 地下地图项目组件，用于展示单个地下地图的图块和标签等
function UndergroundMapItem(props: UndergroundMapProps) {
  const { undergroundMap } = props; // 获取地下地图数据
  // 获取全局状态中的缩放级别和当前激活地下地图
  const { zoomLevel, activeUndergroundMap } = useSnapshot(state);
  // 管理当前选中的地下地图子项状态
  const [current, setCurrent] = useState<UndergroundMap | undefined>(props.current);
  // 计算地图边界最大坐标值，用于定位标签显示位置
  const [x, y] = useMemo(() => {
    let x = Number.MIN_SAFE_INTEGER;
    let y = Number.MIN_SAFE_INTEGER;
    // 遍历地下地图的所有子项及对应图块，找出最大边界坐标
    for (const child of undergroundMap.getChildList()) {
      for (const chunk of child.getChunkList()) {
        const bounds = chunk.getBoundList();
        x = Math.max(x, bounds[2]);
        y = Math.max(y, bounds[3]);
      }
    }
    return [x, y];
  }, []);

  // 根据当前选中的地下地图子项，渲染对应的图块组件
  const chunks = useMemo(() => {
    return undergroundMap.getChildList().map((i) => {
      return i.getChunkList().map((chunk, index) => {
        const image = `underground/${i.getId()}_${index}.webp`; // 图块图片路径
        return (
          <ImageLayer
            key={image} // 唯一标识
            zIndex={zIndex.underground + (i == current ? 1 : 0)} // 设置图层 z-index
            image={image} // 图片资源路径
            bounds={chunk.getBoundList()} // 图块边界范围
            opacity={current == null || i == current ? 1 : 0.3} // 根据是否选中设置透明度
          />
        );
      });
    });
  }, [current]); // 依赖 current 状态变化重新计算

  // 根据当前选中的地下地图子项，渲染对应的标签组件
  const labels = useMemo(() => {
    return undergroundMap.getChildList().map((i) => {
      return (
        <div
          key={i.getId()} // 唯一标识
          className={classNames(
            "w-36 box-border overflow-hidden px-2 py-1 text-xs whitespace-nowrap text-ellipsis text-center font-semibold", // 基础样式
            i == current ? "bg-yellow-500/80 text-white" : "bg-white/80" // 根据是否选中设置不同背景和文字颜色
          )}
          onClick={() => {
            // 点击标签切换当前选中的地下地图子项状态
            if (i == current) {
              setCurrent(undefined);
            } else {
              setCurrent(i);
            }
          }}
        >
          {i.getName()} {/* 显示地下地图子项名称 */}
        </div>
      );
    });
  }, [current]); // 依赖 current 状态变化重新计算

  // 判断当前地下地图是否包含激活的地下地图子项
  const active = undergroundMap.getChildList().includes(activeUndergroundMap as UndergroundMap);
  // 用于存储 DOM 图层元素的引用
  const domLayerElement = useRef<HTMLDivElement>(null);
  // 根据缩放级别和是否激活确定是否隐藏标签显示
  const hidden = zoomLevel < -2 && !active;

  return (
    <>
      {chunks} {/* 渲染图块组件 */}
      {/* 当地下地图有多个子项时，渲染标签容器 */}
      {undergroundMap.getChildList().length > 1 && (
        <DomLayer x={x} y={y} hidden={hidden} zIndex={1}>
          <div
            ref={domLayerElement}
            className={classNames(
              "flex flex-col rounded-md overflow-hidden shadow-md duration-100 ease-out" // 容器样式
            )}
          >
            {labels} {/* 渲染标签组件 */}
          </div>
        </DomLayer>
      )}
    </>
  );
}