<h1>
    World Layers
    <p>by Ferret-Master<br>from <a href="https://github.com/Ferret-Master/Planetary-Annihilation-Modding-Documentation" target="_blank">GitHub</a></p>
</h1>

World layers are used to defined the behaviour of many other parts of a unit.

Most of this info was sourced from [https://wiki.palobby.com/wiki/Planetary_Annihilation_World_Layers]

## Layers

Each of these layers does require WL_ to be put before it whenever used.
Layers that have unknown behaviour to me will have ? tagged on the end

- LandHorizontal
- LandVertical
- Structure - ?
- Seafloor
- Underwater
- DeepWater
- WaterSurface
- Air
- Orbital
- Lava - ?
- Unpathable - ?
- Structure - ?

## Layer Groups

Layer groups combine some of the layers to allow for multi layer behaviour.

- AnyLand (LandHorizontal | LandVertical)
- AnySurface (Structure | LandHorizontal | LandVertical | WaterSurface)
- AnyGround = (Structure | LandHorizontal | LandVertical | Seafloor)
- AnyHorizontalGround (Structure | LandHorizontal | Seafloor)
- AnyHorizontalGroundOrWaterSurface (Structure | AnyHorizontalGround | WaterSurface)
- AnyWater (WaterSurface | DeepWater | Underwater)
- AnyGroundOrWater (AnyGround | AnyWater)
- AirOrOrbital (Air | Orbital)
- AnyLayer
