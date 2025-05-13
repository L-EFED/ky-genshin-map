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