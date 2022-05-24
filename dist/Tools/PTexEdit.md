<h1>
    PTexEdit
    <p>by Luther-1<br>from <a href="https://github.com/Luther-1/PTexEdit" target="_blank">GitHub</a></p>
</h1>
PTexEdit is a graphical Java application allowing for read and write operations on papa files.

### Launching
PTexEdit requires Java to be installed installed to run. If you do not have Java, you can download it here: https://java.com/en/download/

If you have Java installed simply double click PTexEdit.jar it to run it like any other program. If you have .jar associated with another program (such as WinRar) right click PTexEdit.jar and select "open with" then select "Java (TM) Platform SE Binary" or similar. Alternatively, you can create a windows batch file file in the same directory with the following command:
``java -jar PTexEdit.jar``

### Usage
Use the File menu to read and write papa and image files. The View menu will alter the way that program displays images on the right panel. Once an image is loaded, you can zoom and scroll around it, clicking on the image will save the colour under the mouse on the bottom right. For large conversion jobs, there is a batch converter located under Tools.

PTexEdit supports drag and drop operations for loading files and folders. If the program can be certain of what operation you want to do it will automatically start processing the input, otherwise it will prompt on whether to open in papa or image mode. "Open" and "Save" are used to read and write papa files, "Import" and "Export" are used to read and write image files. Only drag and drop properly supports folder reading.

PTexEdit supports read and write of all texture formats known to work with PA (R8G8B8A8, R8G8B8X8, B8G8R8A8, DXT1, DXT5, and R8) DXT compression is implemented through the use of JSquish (https://github.com/memo33/jsquish), however it is slower than papatran and produces slightly lower quality results. If you need the *absolute* best results it's recommended to use papatran for DXT.

Format | Description
:-:|-
DXT1 | Lossy compression without alpha / transparency (8:1 compression ratio).
DXT5 | Lossy compression with alpha / transparency (4:1 compression ratio).
R8G8B8A8 | uncompressed textures.
B8G8R8A8 | uncompressed textures.
R8G8B8X8 | uncompressed textures.
R8 | Red channel only.

If you are unsure what format you should compile to, DXT1 / DXT5 are the go-tos for most all images.

### Additional Info

Some textures are stored as references to other files. PTexEdit is capable of reading these references and loading the files, but you must set the media directory using the Options menu. The media directory for PA is (PA root directory) / media. You can set this directory to anything you want in the case that you are loading modded textures.
  
Reading and writing a file will not alter the actual image data, so it is safe to use PTexEdit to just edit the name or SRGB status of a texture. However, files containing non image data will have that data erased when saving as the program only supports images.

  
PTexEdit supports all Papafile elements, so it is possible to load and save any papa file, even if they have no images. Note that some Papafile elements have a reliance on textures. If the exact texture cannot be found in the file when saving, the default is to look for a texture of the same name and accquire that as the new texture. If that fails the save will error.