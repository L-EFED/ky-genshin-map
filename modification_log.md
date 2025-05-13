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
