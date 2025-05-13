陈俊豪
🗺️ 地图相关术语
英文术语	中文翻译	说明
MarkerLayer	标记图层	用于渲染地图上的标记（如点位、图标）
DomLayer	DOM 图层	用于在地图上渲染 HTML 元素，例如弹窗
TextLayer	文本图层	用于地图上的文字标签
anchor	锚点	图层元素在坐标点上的对齐方式
zIndex	层级索引	控制图层的前后显示顺序
bottomCenterAnchor	底部居中锚点	控制标记图标在地图上相对于坐标点的位置
underground	地下	表示该标记是否在地下地图中
activeUndergroundMap	当前地下地图	当前处于激活状态的地下地图区域
mapId	地图ID	标识某个地图区域的唯一编号

📍 点位与区域
英文术语	中文翻译	说明
marker	标记点	地图上的一个点位，可能包含图标、文本、图片等
activeMarker	当前激活标记	当前被点击或高亮的标记
marked	已标记	被用户“完成”或“记录”的点位
mark, unmark	标记 / 取消标记	切换标记点完成状态
AreaItem	区域项	地图中的一个区域，比如“璃月”或“稻妻”
AreaItemMarker	区域点位	属于某个区域的具体点位数据
getMarkerList()	获取标记列表	从区域项中获取所有关联的标记 ID
getName()	获取名称	返回区域或标记的名称
getIcon()	获取图标	返回标记图标文件名
getPicture()	获取图片	标记点附带的图片（如果有）

🧱 状态管理相关
英文术语	中文翻译	说明
valtio	Valtio 状态管理库	一种 React 状态管理方案
useSnapshot()	获取快照	用于监听 valtio 状态的 hook
state	应用状态	全局共享的状态对象
store	数据存储	存储地图数据、标记数据等的对象

🧩 React 与组件结构
英文术语	中文翻译	说明
props	属性	React 组件的输入参数
useMemo	记忆化 Hook	缓存计算结果避免重复渲染
useState	状态 Hook	React 组件内部状态管理
memo()	组件记忆	提高性能的组件缓存方法
onClick	点击事件	用户点击事件绑定函数
classNames()	类名处理工具	根据条件动态拼接 class 名

📐 UI 与样式类名（来自 Tailwind）
类名	含义
w-6 h-6	宽高为 6（单位：1.5rem）
rounded-full	圆形边角
text-xs / text-sm	字体大小
bg-gray-700 / bg-yellow-900	背景颜色
drop-shadow / shadow-lg	阴影效果
border-solid / border-transparent	边框样式
flex justify-center items-center	Flex 布局，水平/垂直居中



宋治钱
| 术语                      | 定义                                | 用途说明                                                                                 |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------------------ |
| `classNames`            | 一个工具函数，用于动态拼接 CSS 类名              | 用于根据条件动态组合组件的样式类名，例如在容器上拼接默认样式和传入的自定义样式                                              |
| `HTMLAttributes`        | React 中定义 HTML 元素属性的类型接口          | 用于定义组件可以接受的 HTML 原生属性，如 `className`、`style` 等                                        |
| `useState`              | React 的一个钩子函数，用于在函数组件中添加状态        | 用于保存切换开关的状态（开或关），并允许在点击事件中更新状态                                                       |
| `Props`                 | 组件的属性接口，定义组件接收的外部参数的类型            | 用于声明组件可以接收的属性，如 `defaultValue`、`label` 和 `onChange`                                  |
| `Omit`                  | TypeScript 的一个类型工具，用于从一个类型中排除某些属性 | 用于从 `HTMLAttributes<HTMLDivElement>` 中移除 `defaultValue` 和 `onChange` 属性，避免与组件自定义属性冲突 |
| `Switch`                | 组件名称，表示一个切换开关组件                   | 定义了一个可点击的切换开关组件，包含状态切换和样式展示功能                                                        |
| `defaultValue`          | 切换开关的默认值，表示开关的初始状态                | 用于设置切换开关组件的初始状态，默认为 `false`（关闭状态）                                                    |
| `label`                 | 切换开关旁边的标签文字                       | 用于在切换开关旁边显示说明性文字                                                                     |
| `onChange`              | 切换开关状态改变时的回调函数                    | 当用户点击切换开关时，调用此函数并传递新的状态值（`true` 或 `false`）                                           |
| `value`                 | 切换开关的当前状态值                        | 通过 `useState` 钩子保存的状态值，表示开关是打开还是关闭                                                   |
| `setValue`              | 更新 `value` 状态的函数                  | 用于在点击事件中更新切换开关的状态                                                                    |
| `onClick`               | HTML 元素的点击事件处理函数                  | 用于处理用户点击切换开关的操作，包括阻止事件冒泡、更新状态和调用回调函数                                                 |
| `event.stopPropagation` | 阻止事件冒泡的方法                         | 防止点击事件传播到父元素，避免触发不必要的父级事件处理逻辑                                                        |
| `require`               | 用于加载资源（如图片）的函数                    | 在代码中动态加载开关的开/关状态图片资源                                                                 |
| `flex`                  | CSS 的弹性布局属性                       | 用于设置容器的布局方式，使子元素可以灵活排列                                                               |
| `absolute`              | CSS 的绝对定位属性                       | 用于将图片定位到切换开关容器的特定位置                                                                  |
| `textShadow`            | CSS 的文字阴影属性                       | 用于为标签文字添加阴影效果，增强视觉效果                                                                 |

| 术语                 | 定义                            | 用途说明                                   |
| ------------------ | ----------------------------- | -------------------------------------- |
| `classNames`       | 一个工具函数，用于动态拼接 CSS 类名          | 用于根据条件动态组合组件的样式类名，例如根据选中状态设置样式         |
| `ref`              | Valtio 的一个函数，用于创建可引用的状态对象     | 用于将状态对象包装为可引用的响应式对象                    |
| `useSnapshot`      | Valtio 的一个钩子，用于获取状态的快照        | 用于在组件中获取全局状态或本地状态的当前值                  |
| `AreaItem`         | 数据类型，表示区域项                    | 从 `data_pb` 模块导入，用于定义区域项的数据结构          |
| `ItemType`         | 数据类型，表示区域项类型                  | 从 `data_pb` 模块导入，用于定义区域项类型的数据结构        |
| `store`            | 全局状态管理对象                      | 从 `../store` 模块导入，用于存储和管理全局状态          |
| `AreaItems`        | 一个组件，用于渲染区域项列表                | 从 `./area-items` 模块导入，用于渲染区域项的列表       |
| `state`            | 本地状态对象                        | 从 `./state` 模块导入，用于管理组件的本地状态           |
| `closeDrawer`      | 一个函数，用于关闭抽屉                   | 从 `./state` 模块导出，用于关闭抽屉组件              |
| `AreaItemTypes`    | 一个组件，用于渲染所有区域项类型              | 定义了一个组件，用于展示所有区域项类型，并根据状态动态渲染          |
| `mapData`          | 全局状态中的地图数据对象                  | 从 `store` 中获取，包含地图相关的数据和方法             |
| `areaItems`        | 全局状态中的区域项数据                   | 从 `store` 中获取，包含区域项的映射关系               |
| `itemTypes`        | 区域项类型列表                       | 从 `mapData` 中获取，表示所有区域项类型              |
| `AreaItemType`     | 一个组件，用于渲染单个区域项类型              | 定义了一个组件，用于展示单个区域项类型及其子项                |
| `selected`         | 本地状态中的选中状态集合                  | 从 `state` 中获取，用于存储当前选中的区域项类型           |
| `isSelected`       | 布尔值，表示当前区域项类型是否被选中            | 通过判断 `selected` 中是否包含当前类型来确定           |
| `items`            | 当前类型的所有区域项                    | 从 `areaItems` 中根据类型 ID 获取，表示当前类型的所有区域项 |
| `height`           | 动态计算的展开内容高度                   | 根据区域项的数量动态计算展开内容的高度                    |
| `onClick`          | HTML 元素的点击事件处理函数              | 用于处理用户点击操作，例如切换选中状态                    |
| `rotate-180`       | CSS 类，表示旋转 180 度              | 用于根据选中状态动态调整图标的方向                      |
| `duration-300`     | CSS 类，表示过渡动画持续时间为 300 毫秒      | 用于设置动画效果的持续时间                          |
| `ease-out`         | CSS 的过渡效果，表示动画的缓动函数为“逐渐减速”    | 用于设置动画的缓动效果                            |
| `overflow-hidden`  | CSS 类，表示隐藏溢出内容                | 用于隐藏超出容器的内容，通常用于折叠效果                   |
| `flex`             | CSS 的弹性布局属性                   | 用于设置容器的布局方式，使子元素可以灵活排列                 |
| `flex-1`           | CSS 类，表示占据剩余空间                | 用于让子元素占据父容器的剩余空间                       |
| `text-gray-900`    | Tailwind CSS 类，表示文字颜色为深灰色     | 用于设置文字的颜色                              |
| `bg-white`         | Tailwind CSS 类，表示背景颜色为白色      | 用于设置背景颜色                               |
| `rounded`          | Tailwind CSS 类，表示圆角           | 用于设置元素的圆角样式                            |
| `shadow`           | Tailwind CSS 类，表示阴影           | 用于为元素添加阴影效果                            |
| `overflow-y-auto`  | Tailwind CSS 类，表示 Y 轴方向自动滚动   | 用于设置容器在 Y 轴方向上自动滚动                     |
| `m-2`、`p-2`        | Tailwind CSS 类，分别表示外边距和内边距为 2 | 用于设置元素的外边距和内边距                         |
| `w-6`、`h-6`、`mr-2` | Tailwind CSS 类，分别表示宽度、高度和右边距  | 用于设置元素的尺寸和间距                           |

| 术语                                                    | 定义                                        | 用途说明                                   |
| ----------------------------------------------------- | ----------------------------------------- | -------------------------------------- |
| `classNames`                                          | 一个工具函数，用于动态拼接 CSS 类名                      | 用于根据条件动态组合组件的样式类名，例如根据激活状态设置文本颜色       |
| `useSnapshot`                                         | Valtio 的一个钩子，用于获取状态的快照                    | 用于在组件中获取全局状态的当前值，例如获取当前激活的区域项          |
| `AreaItem`                                            | 数据类型，表示区域项                                | 从 `../data_pb` 模块导入，用于定义区域项的数据结构       |
| `activateAreaItem`                                    | 函数，用于激活区域项                                | 从 `../store` 模块导入，用于将区域项标记为激活状态        |
| `inactivateAreaItem`                                  | 函数，用于取消激活区域项                              | 从 `../store` 模块导入，用于将区域项标记为未激活状态       |
| `store`                                               | 全局状态管理对象                                  | 从 `../store` 模块导入，用于存储和管理全局状态，例如激活的区域项 |
| `closeDrawer`                                         | 函数，用于关闭抽屉                                 | 从 `./state` 模块导出，用于关闭抽屉组件              |
| `AreaItems`                                           | 一个组件，用于渲染区域项列表                            | 定义了一个组件，用于展示区域项的列表，并根据状态动态渲染           |
| `items`                                               | 区域项的分组数据，键为分组标识，值为区域项数组                   | 作为组件的传入属性，表示分组后的区域项数据                  |
| `isSelected`                                          | 布尔值，表示当前分组是否被选中                           | 作为组件的传入属性，用于判断当前分组是否被选中                |
| `activeAreaItems`                                     | 全局状态中的激活区域项集合                             | 从 `store` 中获取，用于存储当前激活的区域项             |
| `active`                                              | 布尔值，表示当前分组是否全部激活                          | 通过判断分组中的区域项是否全部激活来确定                   |
| `grid`、`grid-cols-2`、`gap-1`                          | Tailwind CSS 类，分别表示网格布局、两列布局和列间距为 1       | 用于设置容器的网格布局，将区域项分两列显示                  |
| `text-xs`                                             | Tailwind CSS 类，表示字体大小为小号                  | 用于设置文本的字体大小                            |
| `bg-black/10`                                         | Tailwind CSS 类，表示背景颜色为黑色透明度 10%           | 用于设置图标容器的背景颜色                          |
| `p-1`、`mr-1`                                          | Tailwind CSS 类，分别表示内边距为 1 和右边距为 1         | 用于设置元素的内边距和间距                          |
| `box-border`                                          | Tailwind CSS 类，表示使用边框盒模型                  | 用于确保内边距和边框包含在元素的宽度内                    |
| `w-9`、`h-9`                                           | Tailwind CSS 类，分别表示宽度和高度为 9               | 用于设置图标的容器尺寸                            |
| `w-7`、`h-7`                                           | Tailwind CSS 类，分别表示宽度和高度为 7               | 用于设置图标的尺寸                              |
| `object-contain`                                      | CSS 属性，表示图像的缩放方式为包含                       | 用于确保图标在容器内完整显示                         |
| `flex`、`flex-1`、`flex-col`、`justify-center`           | Tailwind CSS 类，分别表示弹性布局、占据剩余空间、列方向布局和居中对齐 | 用于设置容器的布局方式，使子元素可以灵活排列                 |
| `whitespace-nowrap`、`text-ellipsis`、`overflow-hidden` | Tailwind CSS 类，分别表示文本不换行、文本溢出显示省略号和隐藏溢出内容 | 用于设置文本的显示方式，避免溢出                       |
| `text-gray-200`                                       | Tailwind CSS 类，表示文本颜色为浅灰色                 | 用于设置激活状态下的文本颜色                         |
| `text-gray-500`                                       | Tailwind CSS 类，表示文本颜色为中灰色                 | 用于设置区域项总数的文本颜色                         |
| `event.stopPropagation`                               | 阻止事件冒泡的方法                                 | 防止点击事件传播到父元素，避免触发不必要的父级事件处理逻辑          |

 | 术语                                             | 定义                                            | 用途说明                                   |
| ---------------------------------------------- | --------------------------------------------- | -------------------------------------- |
| `classNames`                                   | 一个工具函数，用于动态拼接 CSS 类名                          | 用于根据条件动态组合组件的样式类名，例如根据侧边栏的可见性状态调整样式    |
| `useSnapshot`                                  | Valtio 的一个钩子，用于获取状态的快照                        | 用于在组件中获取全局状态的当前值，例如获取侧边栏的可见性状态         |
| `AreaItemTypes`                                | 一个组件，用于渲染区域项类型列表                              | 从 `./area-item-types` 模块导入，用于展示区域项类型列表 |
| `state`                                        | 全局状态管理对象                                      | 从 `./state` 模块导入，用于存储和管理全局状态，例如侧边栏的可见性 |
| `ToggleButton`                                 | 一个组件，用于渲染切换按钮                                 | 从 `./toggle-button` 模块导入，用于控制侧边栏的显示和隐藏 |
| `closeDrawer`                                  | 函数，用于关闭侧边栏                                    | 从 `./state` 模块导出，用于关闭侧边栏               |
| `Drawer`                                       | 一个组件，用于渲染侧边栏                                  | 定义了一个组件，用于展示侧边栏的布局和内容                  |
| `visible`                                      | 布尔值，表示侧边栏的可见性状态                               | 从全局状态 `state` 中获取，用于控制侧边栏的显示和隐藏        |
| `flex`、`flex-col`                              | Tailwind CSS 类，分别表示弹性布局和列方向布局                 | 用于设置侧边栏的布局方式，使其内容垂直排列                  |
| `w-72`                                         | Tailwind CSS 类，表示宽度为 72                       | 用于设置侧边栏的宽度                             |
| `absolute`                                     | CSS 属性，表示绝对定位                                 | 用于将侧边栏定位到页面的特定位置                       |
| `z-10`                                         | Tailwind CSS 类，表示 z-index 为 10                | 用于设置侧边栏的层级，确保其显示在其他内容之上                |
| `top-16`、`md:top-20`                           | Tailwind CSS 类，分别表示顶部偏移量为 16 和在中等屏幕尺寸下为 20    | 用于设置侧边栏的顶部偏移量，并根据屏幕大小调整                |
| `right-2`                                      | Tailwind CSS 类，表示右侧偏移量为 2                     | 用于设置侧边栏的右侧偏移量                          |
| `duration-300`、`ease-out`                      | Tailwind CSS 类，分别表示动画持续时间为 300 毫秒和缓动函数为“逐渐减速” | 用于设置侧边栏的动画效果                           |
| `h-[calc(100%-4rem)]`、`md:h-[calc(100%-5rem)]` | Tailwind CSS 类，表示高度为计算值                       | 根据屏幕大小动态调整侧边栏的高度                       |
| `transform`                                    | CSS 属性，用于设置元素的变换效果                            | 通过 `translate` 动态调整侧边栏的位置，实现显示和隐藏的动画效果 |
| `require`                                      | 用于加载资源（如图片）的函数                                | 在代码中动态加载侧边栏的背景图片资源                     |
| `rounded`                                      | Tailwind CSS 类，表示圆角                           | 用于设置装饰性横条的圆角样式                         |
| `w-60`、`h-2.5`                                 | Tailwind CSS 类，分别表示宽度为 60 和高度为 2.5            | 用于设置装饰性横条的尺寸                           |
| `shadow`                                       | Tailwind CSS 类，表示阴影                           | 用于为装饰性横条添加阴影效果                         |
| `relative`                                     | CSS 属性，表示相对定位                                 | 用于设置图片的定位方式，使其可以相对于父元素调整位置             |
| `top-1`、`-top-1`                               | Tailwind CSS 类，分别表示顶部偏移量为 1 和负 1              | 用于调整图片的位置，确保背景图片的对齐                    |
| `absolute`                                     | CSS 属性，表示绝对定位                                 | 用于将内容容器定位到侧边栏的内部                       |
| `pt-2.5`、`pl-5`、`pr-3`、`pb-11`                 | Tailwind CSS 类，分别表示内边距的上、左、右、下边距              | 用于设置内容容器的内边距                           |
| `box-border`                                   | Tailwind CSS 类，表示使用边框盒模型                      | 用于确保内边距和边框包含在元素的宽度内                    |
| `mx-auto`                                      | Tailwind CSS 类，表示水平居中                         | 用于将装饰性横条水平居中对齐                         |
| `bg-[url(...)]`                                | Tailwind CSS 类，表示背景图片                         | 用于设置侧边栏内容区域的背景图片                       |




覃冰棱

1. CanvasKit
定义: 基于Skia的高性能2D渲染库，用于高效的图形渲染。
Definition: A high-performance 2D rendering library based on Skia, used for efficient graphics rendering.
用途: 用于处理地图及其图层的渲染。
Usage: Used to handle the rendering of the map and its layers.
2. Layer
定义: 表示地图上一个图层的类，负责在地图上绘制特定元素。
Definition: A class representing a layer in the map, responsible for drawing specific elements on the map.
用途: 作为自定义图层（如_MaskLayer）的基类。
Usage: Used as the base class for custom layers like _MaskLayer.
3. CustomLayer
定义: 一个React组件包装器，用于自定义地图图层，使其能够集成到地图中。
Definition: A React component wrapper for custom map layers, enabling the integration of custom layers into the map.
用途: 用于包装_MaskLayer类，使其能够作为React组件使用。
Usage: Used to wrap the _MaskLayer class to make it usable as a React component.
4. Canvas
定义: CanvasKit提供的2D绘图上下文，用于绘制形状、文本和其他图形元素。
Definition: A 2D drawing context provided by CanvasKit, used for drawing shapes, text, and other graphical elements.
用途: 在_MaskLayer的draw方法中用于绘制半透明黑色矩形。
Usage: Used in the draw method of _MaskLayer to draw the semi-transparent black rectangle.
5. Paint
定义: 用于定义绘图操作样式的对象，例如颜色、笔画宽度和填充样式。
Definition: An object used to define the style of drawing operations, such as color, stroke width, and fill style.
用途: 在_MaskLayer中用于设置半透明黑色矩形的颜色和样式。
Usage: Used in _MaskLayer to set the color and style of the semi-transparent black rectangle.
6. zIndex
定义: 决定地图上图层堆叠顺序的属性。
Definition: A property that determines the stacking order of layers on the map.
用途: 用于设置_MaskLayer的堆叠顺序，确保它被渲染在其他图层下方。
Usage: Used to set the stacking order of the _MaskLayer to ensure it is rendered below other layers.
7. _MaskLayer
定义: 一个继承自Layer的自定义图层类，负责在地图上绘制半透明黑色矩形。
Definition: A custom layer class that extends Layer and is responsible for drawing a semi-transparent black rectangle over the entire map.
用途: 实现了init和draw方法，用于创建和渲染遮罩。
Usage: Implements the init and draw methods to create and render the mask.
8. CustomLayer
定义: 一个React组件，包装自定义图层类，使其能够在React应用中使用。
Definition: A React component that wraps a custom layer class, allowing it to be used within a React application.
用途: 包装_MaskLayer类，将其集成到地图组件中。
Usage: Wraps the _MaskLayer class to integrate it into the map component.
9. React Component
定义: React应用中一个可复用的代码片段，封装了UI元素及其行为。
Definition: A reusable piece of code in a React application that encapsulates UI elements and their behavior.
用途: 用于创建MaskLayer组件，将_MaskLayer集成到地图中。
Usage: Used to create the MaskLayer component, which integrates the _MaskLayer into the map.
10. map!.rect
定义: 表示地图的边界矩形的属性。
Definition: A property representing the bounding rectangle of the map.
用途: 在_MaskLayer的draw方法中用于确定要覆盖的区域。
Usage: Used in the draw method of _MaskLayer to determine the area to be covered by the semi-transparent black rectangle.
11. this.canvaskit!.Paint()
定义: 创建一个新的Paint对象的方法。
Definition: A method to create a new Paint object.
用途: 在_MaskLayer的init方法中用于创建Paint对象，用于绘制遮罩。
Usage: Used in the init method of _MaskLayer to create a Paint object for drawing the mask.
12. this.canvaskit!.Color(0, 0, 0, 0.7)
定义: 创建一个具有RGBA值的颜色的方法。
Definition: A method to create a color with RGBA values.
用途: 在_MaskLayer的init方法中用于设置Paint对象的颜色为半透明黑色。
Usage: Used in the init method of _MaskLayer to set the color of the Paint object to a semi-transparent black.
13. canvas.drawRect(this.map!.rect, this._paint!)
定义: 在画布上绘制矩形的方法。
Definition: A method to draw a rectangle on the canvas.
用途: 在_MaskLayer的draw方法中用于在地图上绘制半透明黑色矩形。
Usage: Used in the draw method of _MaskLayer to draw the semi-transparent black rectangle over the entire map.

覃旗广
以下是针对这三段代码提取的专业术语词汇表（中英对照）：

---

### **核心框架术语 / Core Framework Terms**
| 英文 | 中文 | 应用场景 |
|------|------|----------|
| Valtio | 响应式状态库 | 全局状态管理 |
| useSnapshot | 状态快照 | 组件级状态订阅 |
| proxy | 代理对象 | 创建响应式状态 |
| proxySet | 代理集合 | 标记数据集合管理 |
| CanvaskitMap | 地图渲染引擎 | 底层地图渲染 |

---

### **地图功能术语 / Map Feature Terms**
| 英文 | 中文 | 代码示例 |
|------|------|----------|
| TeleportLayer | 传送点图层 | `allTeleports` 分类渲染 |
| UndergroundLayer | 地下城图层 | `undergroundMap.getChildList()` |
| Statue of The Seven | 七天神像 | `i.getName() == "七天神像"` |
| Chunk | 地图区块 | `chunk.getBoundList()` |
| MaskLayer | 遮罩图层 | 地图切换过渡效果 |
| DomLayer | DOM元素层 | 交互式标签容器 |
| ImageLayer | 图片图层 | 地下城区块渲染 |

---

### **状态管理术语 / State Management Terms**
| 英文 | 中文 | 关键字段 |
|------|------|----------|
| zoomLevel | 缩放等级 | 控制元素显隐 |
| undergroundEnabled | 地下模式开关 | 全局分层地图控制 |
| activeUndergroundMap | 激活的地下地图 | 点位触发联动 |
| teleportVisible | 传送点可见性 | `toggleTeleport()` |
| markedVisible | 标记可见性 | `toggleMarkedVisible()` |

---

### **数据流术语 / Data Flow Terms**
| 英文 | 中文 | 实现方式 |
|------|------|----------|
| Protobuf (data_pb) | 协议缓冲区数据 | `AreaItem/Marker` 结构定义 |
| getItemMap() | 物品映射表 | 快速查找标记数据 |
| getBoundList() | 边界坐标列表 | 确定渲染范围 |
| localStorage | 本地存储 | 标记数据持久化 |

---

### **性能优化术语 / Performance Terms**
| 英文 | 中文 | 技术实现 |
|------|------|----------|
| useMemo | 记忆化计算 | 缓存地图块渲染 |
| zIndex | 层级索引 | `zIndex.underground` |
| Lazy Rendering | 惰性渲染 | `hidden={zoomLevel < -2}` |
| Virtual DOM | 虚拟DOM | `DomLayer` 高效更新 |

---

### **交互设计术语 / Interaction Terms**
| 英文 | 中文 | 对应代码 |
|------|------|----------|
| activateMarker | 激活标记 | 关联地下地图 |
| toggleUnderground | 切换地下模式 | 全局视图控制 |
| mark/unmark | 收藏/取消标记 | 用户数据管理 |
| click handler | 点击事件处理器 | 标签交互逻辑 |

---

### **特殊数值术语 / Special Values**
| 英文 | 中文 | 含义 |
|------|------|------|
| zoomLevel < -4 | 缩放等级阈值 | 七天神像隐藏条件 |
| zoomLevel < -2 | 缩放等级阈值 | 常规传送点隐藏条件 |
| opacity: 0.3 | 透明度值 | 非活跃层半透明化 |
| zIndex.underground + 1 | 层级叠加 | 当前选中层置顶 |

---

