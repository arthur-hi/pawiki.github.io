<h1>
    Miscellaneous interactions/bugs
    <p>by Ferret-Master<br>from <a href="https://github.com/Ferret-Master/Planetary-Annihilation-Modding-Documentation" target="_blank">GitHub</a></p>
</h1>

## Transport Related

- PBAOE will still work in transports
- If allowed to pick up a unit that is still building the unit can still continue to be built no matter the range.
- If a transport is allowed to pickup buildings they can be stacked easily
    - pathing will often be messed up with the buildings original location acting as if it was still there.

## General Bugs

- If a units guard layer is WL_LandHorizontal its patrol will not work correctly and will only modify a units pathing upon seeing an enemy unit if that unit was spawned in or built by a fabber.<br>
This is most noticeable with boom bots not attacking enemy units made from factory's if set to patrol against them.<br>
To fix this use WL_AnySurface instead.
