<h1>
    On the Basics of Procedural Texturing
    <p>by [ICARUS] Taiga and [ICARUS] Billthebluebot<br><a href="https://cdn.discordapp.com/attachments/489787100988964864/978663682953318420/Procedural_Texturing.pdf" target="_blank">Original PDF</a> from <a href="https://discord.gg/pa" target="_blank">Discord</a></p>
</h1>

### The Basic Components of a Texture

#### Expectations
Before making the Procedural Texture, this guide assumes some preparation
 - UV Unwrapping
 - Baked Ambient Occlusion
 - Exporting the UVs
     - 1 Opacity all materials
     - 0 Opacity all materials
     - 1 Opacity
         - Primary
         - Secondary
         - Light Grey
         - Medium Grey
         - Dark Grey
         - Lights<br><br>
 - Suitable Image Editing Software
     - Corel
     - CSP (Clip Studio Paint)
     - Paint.net

#### Diffuse
The diffuse is the image that will contain most of the detail in the texture, the other images are
overlaid to create the final texture in game. Diffuse textures made by Daedalus team are
composed of edge highlights, ambient occlusion and decals.

#### Mask
The mask determines which portions of the texture are primary, secondary and emissive. It also determines which portions of the texture will be grey<br>
(or whatever colour the diffuse is) by
omission.

#### Material
The material determines how shiny (specular) the texture will be. This layer is important for rendering decals like vents and panel lines more convincingly.

### Making the Textures
#### Making the Diffuse
1. Bake ambient occlusion. It’s an easy place to start.
2. Export UV map with 100% opacity, it is helpful to
export each material separately by selecting them.
3. Export UV map with 0% opacity, this will be used to
create edge highlights.
4. Open your image editor of choice and add in each of
the above steps in their own layers.
5. Use the 100% opacity UVs to place light grey, medium
grey, dark grey. Add any other colours that aren’t
covered by the mask, such as green fab juice,
construction lines, red, or white lights ect..
6. Edge highlights go on top. Colour the 0% opacity UVs
pure white and set them to overlay. Check the texture in the blender for extra edge
highlights before proceeding. Copy the layer and apply a blur effect for feathering, this
part will require a decent amount of trial and error.
7. Ambient occlusion is second, Set the layer to multiply. If the effect is too subtle it can
help to copy the layer.
8. Add decals to taste. This guide does not cover decals, but they are simple enough at this
point.

Example of Diffuse:<br>
<img src="/resources/img/docs/procedural texturing/diffuse.png"><br><br>

#### Making the Mask
1. Produce a black background layer
2. Copy the Primary UV layer and color in with the color
F70000 (Primary Color)
3. Copy the Secondary UV layer and color in with the
color 00FB00 (Secondary Color)
4. Copy the Lights UV layer and color in with the color
0000F7(Lights Color)

Example of Mask:<br>
<img src="/resources/img/docs/procedural texturing/mask.png"><br><br>

#### Making the Material
9. Produce a Pink (High Specular) background layer
F7CFF7
10. Copy the Medium Grey and Dark Grey UV Layers and
color in with Purple (Low Specular) C7C3F7
11. Copy the Lights UV Layer and color in with Blue
(Emission Specular) 0000F7
12. Understanding this is procedural, there should not be
pure black textures and decals, but those should be
colored in with Sky Blue (No Specular) 00C3F7

Example of Material:<br>
<img src="/resources/img/docs/procedural texturing/material.png"><br><br><br>

<img src="https://cdn.discordapp.com/attachments/489787100988964864/978662890473127967/tex_colours.png" style="width: 100%; max-width: 720"><br><br>

Hex Color Codes:
#### diffuse:
 - light grey:<img class="hex"></img><v class="value">676767</v>
 - mid grey:<img class="hex"></img><v class="value">3f3f3f</v>
 - dark grey:<img class="hex"></img><v class="value">171317</v>
 - primary/secondary:<img class="hex"></img><v class="value">777b77</v>

#### mask:
 - primary:<img class="hex"></img><v class="value">f70000</v>
 - secondary:<img class="hex"></img><v class="value">00fb00</v>
 - lights:<img class="hex"></img><v class="value">0000f7</v>
 - all greys:<img class="hex"></img><v class="value">000000</v>


#### material:
 - medium/dark grey:<img class="hex"></img><v class="value">c7c3f7</v>
 - lights:<img class="hex"></img><v class="value">0000f7</v>
 - no specular:<img class="hex"></img><v class="value">00c3f7</v>
 - team colors+light grey:<img class="hex"></img><v class="value">f7cff7</v>



#### additional diffuse colors:
 - green lights:<img class="hex"></img><v class="value">60f000</v>
 - red lights:<img class="hex"></img><v class="value">f80000</v>
 - fab stripes (yellow-black):<img class="hex"></img><v class="value">e8b000</v>