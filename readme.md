Kongying Tavern Genshin Map
A super-smooth interactive map for Genshin Impact. Data source: Kongying Tavern.

Online Demos:

https://qiuxiang.github.io/ky-genshin-map/ (GitHub Pages)

https://ky-genshin-map-1253179036.cos-website.ap-nanjing.myqcloud.com (Tencent Cloud COS)



📱 Mobile Compatibility
Fully responsive and smooth experience on mobile browsers as well.



🔧 Build Instructions
bash
复制
编辑
# Initialize
pnpm run init

# Start development server
pnpm run dev

# Build for production
pnpm run build
✅ TODO List
 Highlight markers on the same layer (same floor) like in Genshin's official layered map

 Improve display of region and subregion names

 Support import/export of save data



陈俊豪
Perform bug analysis and English comment translation for the following components:

1. ActiveMarkerLayer (Active Marker Layer)
Purpose: Displays the currently selected marker and its detailed information.

Load and render the designated marker icon (active-marker.png)

Show marker title, content, images, etc.

Support toggling "Incomplete / Completed" status (using Valtio for state management)

2. AreaItemLayer (Area Item Layer)
Purpose: Displays all resource points or special locations on the map.

Requirements:

Render markers by region type and whether they are aboveground/underground

Use MarkerLayer to show points, with support for icons and underground tags

Optionally exclude the currently active marker and completed markers

3. AreaNamesLayer (Area Name Layer)
Purpose: Displays major/subregion names on the map in Chinese.

Dynamically show/hide different name layers based on map zoom level

Use TextLayer with a custom font to render Chinese text

Support management of main and subregion name lists


宋治钱
I have been working on the first three parts of [components] and [drawer]. In [components], it implements a graphical toggle switch, which is commonly used to switch between two states, such as turning on or off a certain feature. The functionality of [drawer][area-item-types.tsx] is that they are used to render and manage a list of area item types. These components are typically used to build user interfaces where users can view and select different types of area items. [area-items.tsx] allows users to activate or deactivate an entire group of area items by clicking. It provides visual feedback, indicating the activation status of the area items through changes in background and text color. It displays the name and quantity of the area items to help users identify and manage different area items. [index.tsx] provides a collapsible sidebar that users can control the display status of by clicking a toggle button. The sidebar can contain various content, such as a list of area item types, from which users can make selections and perform operations.


覃冰凌
### 1. **index.ts**
This code implements a visualization component for the _Genshin Impact_ game map, using CanvasKit for efficient map rendering.
- **Map Container**: Uses `CanvaskitMap` as the map container.
- **Tile Loading**: Loads and displays map tiles using `TileLayer`.
- **Interaction**: Supports panning and zooming interactions.
- **Layered Rendering System**: 
  - **Architecture**: Uses a layered architecture where different elements are placed on different layers.
  - **Order Control**: Controls the display order of layers using `zIndex`.
- **Dynamic Content Management**:
  - **Data and Configuration**: Retrieves map data and settings from the global state `store`.
  - **Dynamic Rendering**: Dynamically renders active area items.

### 2. **mask-layer.ts**
This code implements a black semi-transparent mask layer, primarily used to create a visual mask effect on the map.
- **Mask Effect Implementation**: Creates a black semi-transparent rectangle that covers the entire map area.
- **Layer Management**:
  - **Inheritance**: Inherits from the base `Layer` class.
  - **Z-index Setting**: Sets the `zIndex` to `underground` to ensure it is displayed above the base map but below other content layers.

### 3. **settings.tsx**
This code defines a React component called `Settings`, which creates a settings panel that allows users to control the visibility of certain features using switches.
- **Settings Panel**:
  - **Layered Map**: Controls whether the layered map feature is enabled.
  - **Teleport Points**: Controls the visibility of teleport points.
  - **Markers**: Controls the visibility of marked content.
- **Usage**: This component is likely used in a map application or similar application to allow users to customize the content displayed on the map.

### 4. **shadow-layer.ts**
This code defines a custom shadow layer and encapsulates it as a React component (`ShadowLayer`).
- **Gradient Shadow Effect**: Used to draw a gradient shadow effect on the map.