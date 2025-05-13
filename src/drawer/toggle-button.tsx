// 引入 classNames 用于条件合并 class 名称
// Import classNames to conditionally combine class names
import classNames from "classnames";

// 使用 valtio 的 useSnapshot 获取响应式状态快照
// Import useSnapshot from valtio to track reactive state
import { useSnapshot } from "valtio";

// 引入全局状态和切换抽屉的方法
// Import global state and the function to toggle the drawer
import { state, toggleDrawer } from "./state";

// 导出关闭抽屉的方法，供其他组件使用
// Export closeDrawer so other components can use it
export { closeDrawer } from "./state";

// 定义 ToggleButton 组件，点击它可以切换抽屉的显示状态
// Define the ToggleButton component, clicking it toggles drawer visibility
export function ToggleButton() {
  // 从状态中获取 visible 属性，表示抽屉是否可见
  // Get 'visible' from the state snapshot to check if the drawer is visible
  const { visible } = useSnapshot(state);

  return (
    <div
      // 按钮的容器，绝对定位在屏幕左侧边缘
      // Button container, absolutely positioned at the left edge of the screen
      className="absolute -z-10 top-2 -left-11 h-8 w-14 bg-contain bg-right bg-no-repeat"
      style={{
        // 设置背景图片为按钮图标
        // Set background image to the drawer button graphic
        backgroundImage: `url(${require("../../images/drawer-button.png")})`,
      }}
      // 点击容器时触发抽屉的切换
      // Toggle the drawer when this div is clicked
      onClick={toggleDrawer}
    >
      <div
        // 小箭头图标，根据 visible 状态动态旋转
        // Arrow icon that rotates depending on whether the drawer is visible
        className={classNames(
          "h-5 w-5 mt-1.5 ml-6 bg-cover duration-300 ease-out",
          !visible && "rotate-180" // 抽屉隐藏时旋转 180 度 // Rotate when drawer is hidden
        )}
        style={{
          // 设置箭头背景图
          // Set background image to the drawer arrow graphic
          backgroundImage: `url(${require("../../images/drawer-arrow.png")})`,
        }}
      />
    </div>
  );
}
