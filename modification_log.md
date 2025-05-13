陈俊豪
将文件active-marker-layer的bug代码:
<img
      img className="w-4 block"
      src={require("../../images/active-marker.png")}
      onLoad={() => setLoading(false)}
    />
修改成：
<img
      img className="w-4 block"
      src={require("../../images/active-marker.png")}
      onLoad={() => setLoading(false)}
    />

将文件area-item-layer的bug代码:
      if (undergroundEnabled && !underground) {
    props.hidden = true;
  }
  return (
    <MarkerLayer
      {...props}
      className="p-1"
      anchor={bottomCenterAnchor}
      zIndex={zIndex.marker}
    >
      <div
        className={classNames(
          "w-6 h-6 flex justify-center items-center rounded-full border border-white border-solid bg-gray-700",
          isSafari ? "drop-shadow" : "drop-shadow-sm"
        )}
      >
        <img
          className="w-11/12 h-11/12 object-contain"
          src={`icons/${areaItem.getIcon()}`}
        />
      </div>
      {underground && (
        <img
          className="absolute w-4 h-4 bottom-0 right-0"
          src={require("../../images/icon-underground.png")}
        />
      )}
      {activeUnderground && (
        <img
          className="absolute w-4 h-4 bottom-0 right-0"
          src={require("../../images/icon-underground-active.png")}
        />
      )}
    </MarkerLayer>
  );

修改成:
    const hidden = undergroundEnabled && !underground;
return <MarkerLayer {...props} hidden={hidden}       className="p-1"
      anchor={bottomCenterAnchor}
      zIndex={zIndex.marker}
    >
      <div
        className={classNames(
          "w-6 h-6 flex justify-center items-center rounded-full border border-white border-solid bg-gray-700",
          isSafari ? "drop-shadow" : "drop-shadow-sm"
        )}
      >
        <img
          className="w-11/12 h-11/12 object-contain"
          src={`icons/${areaItem.getIcon()}`}
        />
      </div>
      {underground && (
        <img
          className="absolute w-4 h-4 bottom-0 right-0"
          src={require("../../images/icon-underground.png")}
        />
      )}
      {activeUnderground && (
        <img
          className="absolute w-4 h-4 bottom-0 right-0"
          src={require("../../images/icon-underground-active.png")}
        />
      )} />;

将文件toggle-button里面的英文注释翻译成中文







宋治钱
用了ai术词汇的理解和学习 还有功能的应用
我做的是[components]和[drawer]的前三部分 [components] 里面的内容是它实现了一个图形化的切换开关，通常用于在两种状态之间进行切换，比如开启或关闭某个功能 [drawer][area-item-types.tsx]功能是它们用于渲染和管理一个区域项类型的列表。这些组件通常用于构建用户界面，其中用户可以查看和选择不同的区域项类型 [area-items.tsx]允许用户通过点击来激活或取消激活整个分组的区域项。 [index.tsx]提供一个可展开和收起的侧边栏，用户可以通过点击切换按钮来控制其显示状态。 侧边栏内部可以包含各种内容，如区域项类型列表，用户可以在其中进行选择和操作，对这个代码有了深刻的理解。


覃冰棱

覃冰棱
使用ai查询分配区域的代码功能解释代码实现了一个《原神》游戏地图的可视化组件，使用 CanvasKit 进行高效渲染地图基础渲染和实现了一个黑色半透明的遮罩层，主要用于在地图上创建视觉遮罩效果遮罩效果实现 创建一个覆盖整个地图区域的黑色半透明矩形层级管理
2使用ai对文本等进行翻译和专业术语的查询