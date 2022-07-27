<h1>
    Blender PAPA IO
    <p>by Luther-1, original by raevn<br>from <a href="https://github.com/Luther-1/Blender-PAPA-IO" target="_blank">GitHub</a></p>
</h1>
Blender PAPA IO is a python extension for blender to import and export model, texture, and animation data from the .PAPA file format for Planetary Annihilation.

## Downloads
- [GitHub Releases](https://github.com/Luther-1/Blender-PAPA-IO/releases)
- [Linux Latest](https://github.com/Luther-1/Blender-PAPA-IO/releases/latest/download/io_scene_papa_linux.zip)
- [Windows Latest](https://github.com/Luther-1/Blender-PAPA-IO/releases/latest/download/io_scene_papa_windows.zip)
- [Source code](https://github.com/Luther-1/Blender-PAPA-IO/archive/refs/heads/main.zip)

## Installation
- Download the source code as a zip file and save to your PC (Do not unzip this file).
- In Blender, navigate to **Edit** -> **Preferences** -> **Add-ons**.
- Press **Install...** and navigate to the downloaded soure code zip file.
- Select the zip file and then press **Install Add-on**.
- You may need to enable the add on after installing;<br>Search for **"papa"** and then find the add-on **"Import-Export: Planeary Annihilation PAPA Format"** and enable the check box.

## Usage
Import and export are located under the **File** -> **Import** / **Export** menus.

#### Import
The importer supports all PA data. Models, Textures, and Animations. Simply navigate to the file and select it. Auto importing textures will only work if the textures are either in the same folder as the unit, or if both the imported file and the target textures are in a subdirectory of the same /pa/ or /pa_ex1/ directory in the case of CSG. (i.e. both stored in the base game or both stored in a mod).

#### Export
Exporting a unit or an animation is as simple as selecting the target object(s) and pressing export. For CSG, you must input the absolute or relative paths to the texture files. As long as the textures are in *any* /pa/ or /pa_ex1/ subdirectory it will automatically correct the path. You can use the small file buttons on the right of the paths to grab the active path from the exporter window and write it into the texture path.

#### Exporting With More Than 32 Bones
PA imposes a limit of 32 weighted bones per model. The exporter can get around this limitation using multi mesh. If you want more than 32 weighted bones, you must split your single mesh into multiple meshes, each having at most 32 weighted bones. Separation may be done by selecting parts of the mesh and then using the separate by selection Blender command. Select all the meshes and export them together using "Export Selected", ensuring "Multi-Mesh" is checked (this does not interfere with adding a nav mesh for models that require one). The model once exported will behave exactly as like any other model, just with more bones.

## Additional Info
For more information about how specifically PA texture data is stored, see [Reference Models Textures](https://forums.planetaryannihilation.com/threads/reference-models-textures.48081/)<br>
Note that the forum post states blue in material is unused, but it is actually an emission map for CSG only.