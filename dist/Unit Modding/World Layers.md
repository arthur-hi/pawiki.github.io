<h1>
    World Layers
    <p>from Ferretmaster</p>
</h1>
World layers are used to defined the behaviour of many other parts of a unit.
<br>
Most of this info was sourced from [https://wiki.palobby.com/wiki/Planetary_Annihilation_World_Layers]
<br>
<br>
<h3>Layers</h3>
Each of these layers does require WL_ to be put before it whenever used.
Layers that have unknown behaviour to me will have ? tagged on the end
<br>
<br>
- LandHorizontal<br>
- LandVertical<br>
- Structure - ?<br>
- Seafloor<br>
- Underwater<br>
- DeepWater<br>
- WaterSurface<br>
- Air<br>
- Orbital<br>
- Lava - ?<br>
- Unpathable - ?<br>
- Structure - ?<br>
<br>
<h3>Layer Groups</h3>
Layer groups combine some of the layers to allow for multi layer behaviour.
<br>
- AnyLand (LandHorizontal | LandVertical)<br>
- AnySurface (Structure | LandHorizontal | LandVertical | WaterSurface)<br>
- AnyGround = (Structure | LandHorizontal | LandVertical | Seafloor)<br>
- AnyHorizontalGround (Structure | LandHorizontal | Seafloor)<br>
- AnyHorizontalGroundOrWaterSurface (Structure | AnyHorizontalGround | WaterSurface)<br>
- AnyWater (WaterSurface | DeepWater | Underwater)<br>
- AnyGroundOrWater (AnyGround | AnyWater)<br>
- AirOrOrbital (Air | Orbital)<br>
- AnyLayer<br>