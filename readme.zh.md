# 空荧酒馆原神地图

超级丝滑的原神地图，数据来源：[空荧酒馆](https://yuanshen.site/docs/)。

在线链接：

- https://qiuxiang.github.io/ky-genshin-map/ (github pages)
- https://ky-genshin-map-1253179036.cos-website.ap-nanjing.myqcloud.com (腾讯云 COS)

![图片](https://github.com/qiuxiang/ky-genshin-map/assets/1709072/2ea4b8e7-1978-4b95-a353-cc712a01b21e)

### 移动端适配

在手机浏览器也能保证流畅体验。

https://github.com/qiuxiang/ky-genshin-map/assets/1709072/193c2ed9-2cce-44d5-9fbe-5979c6a9a0f1

## 构建

```bash
# 初始化
pnpm run init

# 开发
pnpm run dev

# 编译
pnpm run build
```

## TODO

- [x] 和原神内置的分层地图一样，对同层的点位特别标记
- [ ] 完善各地区/子地区地名显示
- [x] 存档数据导入/导出


陈俊豪 任务：
    对下面功能进行bug排查和英文注释翻译

    1. ActiveMarkerLayer（激活标记图层）
    功能：显示用户当前选中的标记点及其详情信息。

    加载并展示指定的标记图标（active-marker.png）

    显示标记的标题、内容、图片等信息

    支持“未完成 / 已完成”状态切换（使用 Valtio 管理状态）

    2. AreaItemLayer（区域点图层）
    功能：展示地图上的所有资源点或特殊位置。

    要求：

    按区域类型和地下/地上分类渲染 marker

    使用 MarkerLayer 显示点位，支持图标和地下标识

    排除当前激活点与已完成点（可配置）

    3. AreaNamesLayer（区域地名图层）
    功能：在地图上显示主要/次级区域的中文地名标签。

    根据缩放等级动态显示/隐藏不同层级地名

    使用 TextLayer 加载自定义字体渲染中文文本

    支持主区域和子区域名称列表的管理


    宋治钱 

     我做的是[components]和[drawer]的前三部分 [components] 
    里面的内容是它实现了一个图形化的切换开关，通常用于在两种状态之间进行切换，比如开启或关闭某个功能 [drawer][area-item-types.tsx]功能是它们用于渲染和管理一个区域项类型的列表。

    这些组件通常用于构建用户界面，其中用户可以查看和选择不同的区域项类型 [area-items.tsx]允许用户通过点击来激活或取消激活整个分组的区域项。 提供视觉反馈，通过背景颜色和文本颜色的变化来指示区域项的激活状态。
    
     显示区域项的名称和数量，帮助用户识别和管理不同的区域项。
      [index.tsx]提供一个可展开和收起的侧边栏，用户可以通过点击切换按钮来控制其显示状态。 侧边栏内部可以包含各种内容，如区域项类型列表，用户可以在其中进行选择和操作






