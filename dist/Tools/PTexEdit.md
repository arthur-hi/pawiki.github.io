<h1>
    PTexEdit
    <p>by Luther-1<br>from <a href="https://github.com/Luther-1/PTexEdit" target="_blank">GitHub</a></p>
</h1>
PTexEdit is a graphical Java application allowing for read and write operations on papa files.

### Downloads
- [GitHub Releases](https://github.com/Luther-1/PTexEdit/releases)
- [Version 0.3](https://github.com/Luther-1/PTexEdit/releases/download/v0.3/PTexEdit.zip)
- [Source code](https://github.com/Luther-1/PTexEdit/archive/refs/heads/master.zip)


### Launching
PTexEdit requires [Java](https://java.com/en/download/) to be installed installed to run.<br>
Once you have Java installed simply double click **PTexEdit.jar** it to run it like any other program. If you have **.jar** associated with another program (such as WinRar) right click **PTexEdit.jar** and select **Open With** then select **Java (TM) Platform SE Binary** or similar.<br>
Alternatively, you can create a windows batch file file in the same directory with the following command:
```
java -jar PTexEdit.jar
```

### Usage
Use the File menu to read and write papa and image files.<br>
The View menu will alter the way that program displays images on the right panel.<br>
Once an image is loaded, you can zoom and scroll around it, clicking on the image will save the colour under the mouse on the bottom right.<br>
For large conversion jobs, there is a batch converter located under Tools.

PTexEdit supports drag and drop operations for loading files and folders.<br>
If the program can be certain of what operation you want to do it will automatically start processing the input, otherwise it will prompt on whether to open in papa or image mode.<br>
**Open** and **Save** are used to read and write papa files, **Import** and **Export** are used to read and write image files.<br>
Only drag and drop properly supports folder reading.

PTexEdit supports read and write of all texture formats known to work with PA (R8G8B8A8, R8G8B8X8, B8G8R8A8, DXT1, DXT5, and R8)<br>
DXT compression is implemented through the use of [JSquish](https://github.com/memo33/jsquish), however it is slower than papatran and produces slightly lower quality results.<br>
If you need the ***absolute*** best results it's recommended to use papatran for DXT.

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

Some textures are stored as references to other files.<br>
PTexEdit is capable of reading these references and loading the files, but you must set the media directory using the Options menu.<br>
The media directory for PA is (PA root directory) / media.<br>
You can set this directory to anything you want in the case that you are loading modded textures.
  
Reading and writing a file will not alter the actual image data, so it is safe to use PTexEdit to just edit the name or SRGB status of a texture.<br>
However, files containing non image data will have that data erased when saving as the program only supports images.

  
PTexEdit supports all Papafile elements, so it is possible to load and save any papa file, even if they have no images.<br>
Note that some Papafile elements have a reliance on textures.<br>
If the exact texture cannot be found in the file when saving, the default is to look for a texture of the same name and accquire that as the new texture.<br>
If that fails the save will error.