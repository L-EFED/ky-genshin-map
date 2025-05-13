// 导入 valtio 的 useSnapshot 钩子，用于访问全局状态
import { useSnapshot } from "valtio";
// 导入 AreaItem 数据模型，表示地图上的区域项目
import { AreaItem } from "../data_pb";
// 导入全局状态管理 store
import { store } from "../store";
// 导入 AreaItemLayer 组件，用于渲染单个区域项目
import { AreaItemLayer } from "./area-item-layer";
// 导入本地状态管理 state
import { state } from "./state";

// TeleportLayer 组件，用于渲染传送点和神像的图层
export function TeleportLayer() {
  // 从全局状态 store 中获取地图信息和地图数据
  const { mapInfo, mapData } = useSnapshot(store);
  // 从本地状态 state 中获取传送点可见性状态
  const { teleportVisible } = useSnapshot(state);
  // 从本地状态 state 中获取当前缩放级别
  const { zoomLevel } = useSnapshot(state);

  // 获取地图数据中的物品映射表
  const itemMap = mapData.getItemMap();

  // 获取地图信息中的所有传送点 ID 列表，并根据 ID 从物品映射表中获取对应的传送点对象
  const allTeleports = mapInfo.getTeleportList().map((i) => itemMap.get(i)!);

  // 定义用于存储传送点和神像的数组
  const teleports = [] as AreaItem[];
  const statues = [] as AreaItem[];

  // 遍历所有传送点对象，根据名称分类为神像和普通传送点
  for (const i of allTeleports) {
    if (i.getName() == "七天神像") {
      // 如果名称为“七天神像”，则归类到神像数组
      statues.push(i);
    } else {
      // 其他传送点归类到普通传送点数组
      teleports.push(i);
    }
  }

  // 如果传送点可见性状态为 true，则渲染传送点和神像的图层
  if (teleportVisible) {
    return (
      <>
        {/* 渲染神像图层，当缩放级别小于 -4 时隐藏 */}
        {statues.map((i) => (
          <AreaItemLayer key={i.getId()} areaItem={i} hidden={zoomLevel < -4} />
        ))}
        {/* 渲染普通传送点图层，当缩放级别小于 -2 时隐藏 */}
        {teleports.map((i) => (
          <AreaItemLayer key={i.getId()} areaItem={i} hidden={zoomLevel < -2} />
        ))}
      </>
    );
  }

  // 如果传送点不可见，则不渲染任何内容
  return null;
}