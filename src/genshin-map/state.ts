// 导入依赖
import { MapClickEvent, MarkerItem, CanvaskitMap } from "@canvaskit-map/core";
import { proxy, ref } from "valtio";
import { proxySet } from "valtio/utils";
import { AreaItem, Marker, UndergroundMap } from "../data_pb";
import { store } from "../store";

// 自定义标记接口，扩展基础标记项
export interface AreaItemMarker extends MarkerItem {
  marker: Marker;     // 原始标记数据
  areaItem: AreaItem; // 关联的区域项
}

/**
 * 核心应用状态管理对象
 * 使用valtio的proxy创建响应式状态
 */
export const state = proxy({
  tilemap: null as unknown as CanvaskitMap,  // 地图引擎实例
  zoomLevel: 0,                             // 当前地图缩放级别(整数)
  undergroundEnabled: false,                // 地下城模式开关
  activeUndergroundMap: null as UndergroundMap | null, // 当前激活的地下城
  teleportVisible: true,                    // 传送点可见性
  markedVisible: false,                     // 收藏标记可见性
  activeMarker: null as AreaItemMarker | null, // 当前选中的标记
  marked: proxySet<number>(),               // 用户收藏的标记ID集合(响应式Set)
});

/**
 * 地图初始化完成回调
 * @param tilemap - 初始化完成的地图引擎实例
 */
export async function onTilemapReady(tilemap: CanvaskitMap) {
  state.tilemap = ref(tilemap);  // 保存地图引用(ref保持响应性)
  onTilemapMove();               // 初始化缩放状态
}

/**
 * 地图移动/缩放回调
 * 更新当前缩放级别状态(取整)
 */
export async function onTilemapMove() {
  state.zoomLevel = Math.floor(state.tilemap!.zoom);
}

// 视图控制函数 ==================================

/** 切换收藏标记的显示状态 */
export function toggleMarkedVisible() {
  state.markedVisible = !state.markedVisible;
}

/** 切换地下城模式的开启状态 */
export function toggleUnderground() {
  state.undergroundEnabled = !state.undergroundEnabled;
}

/** 切换传送点的显示状态 */
export function toggleTeleport() {
  state.teleportVisible = !state.teleportVisible;
}

/**
 * 地图点击事件处理
 * @param event - 地图点击事件对象
 */
export function onTilemapClick(event: MapClickEvent) {
  // 如果点击的是空白区域(非标记)，则清除当前选中状态
  if (!event.markerItem) {
    state.activeMarker = null;
    state.activeUndergroundMap = null;
    console.log("onClick", event.coordinate); // 输出点击坐标
  }
}

/**
 * 激活标记处理函数
 * @param marker - 被激活的标记对象
 */
export function activateMarker(marker: AreaItemMarker) {
  state.activeMarker = ref(marker); // 设置当前选中标记
  
  // 检查标记是否关联地下城
  const underground = marker?.marker.getUnderground();
  if (underground) {
    // 查找匹配的地下城地图
    for (const item of store.mapData.getUndergroundMapList()) {
      const active = item.getChildList().find((i) => i.getId() == underground);
      if (active) {
        state.activeUndergroundMap = ref(active); // 激活关联地下城
        break;
      }
    }
  } else {
    state.activeUndergroundMap = null; // 清除地下城状态
  }
}

// 标记收藏系统 ==================================

/**
 * 收藏标记
 * @param marker - 要收藏的标记对象
 */
export function mark(marker: Marker) {
  state.marked.add(marker.getId()); // 添加标记ID到收藏集
  // 持久化到localStorage
  localStorage.setItem("marked", JSON.stringify([...state.marked]));
}

/**
 * 取消收藏标记
 * @param marker - 要取消的标记对象
 */
export function unmark(marker: Marker) {
  state.marked.delete(marker.getId()); // 从收藏集移除
  // 更新localStorage
  localStorage.setItem("marked", JSON.stringify([...state.marked]));
}

/**
 * 导出收藏数据为JSON文件
 */
export function exportData() {
  // 创建Blob对象
  const blob = new Blob([JSON.stringify([...state.marked])]);
  // 创建隐藏下载链接
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = URL.createObjectURL(blob);
  // 使用当前时间作为文件名
  link.download = `${new Date().toLocaleString()}.json`;
  link.click(); // 触发下载
}

/**
 * 从JSON文件导入收藏数据
 */
export function importData() {
  // 创建隐藏文件输入元素
  const input = document.createElement("input");
  input.style.display = "none";
  input.type = "file";
  input.click(); // 触发文件选择
  
  // 文件选择回调
  input.onchange = ({ target }) => {
    const { files } = target as HTMLInputElement;
    if (files && files.length > 0) {
      const reader = new FileReader();
      
      // 文件读取完成回调
      reader.onload = () => {
        const data = JSON.parse(reader.result as string);
        // 如果已有收藏数据，请求确认覆盖
        if (state.marked.size > 0 && !confirm("是否覆盖当前数据")) {
          return;
        }
        // 更新状态和本地存储
        state.marked = proxySet(data);
        localStorage.setItem("marked", JSON.stringify([...state.marked]));
      };
      
      reader.readAsText(files[0]); // 开始读取文件
    }
  };
}

/**
 * 初始化函数 - 从localStorage加载收藏数据
 */
async function init() {
  const marked = localStorage.getItem("marked");
  if (marked) {
    state.marked = proxySet(JSON.parse(marked)); // 初始化响应式Set
  }
}




// 应用启动时自动初始化
init();