<h1>
    Mass Teleporter
    <p>by Ferret-Master<br>from <a href="https://github.com/Ferret-Master/Planetary-Annihilation-Modding-Documentation" target="_blank">GitHub</a></p>
</h1>

Mass teleport is a partially implemented mechanic that I have heard was going to be used for a support commander. This was never completed so using this mechanic in its current state has many issues/bugs.

Be very careful with the type of unit you give this to as it can very easily become overpowered.

A unit that has mass teleport can transport itself and other units in a radius to a target destination. This will take a certain amount of time and energy. In addition Units that are teleported will have their health temporarily lowered and can't move or attack until they have full health.

## Bugs/Issues

- The target location is not checked for pathability so units can mass teleport pretty much anywhere. Examples include on to buildings, csg and unpathable areas.

- There is no kind of range or planet restriction. A unit can mass teleport to any location or planet that is targetable.

- It does not work with orbital units, In addition I don't believe it works with Air/Sea units, at Least in terms of teleporting into air or sea.

## Fields

The fields are contained within a top level line in the unit spec called mass_teleporter.

In addition to these fields you will need to add the mass teleport command to the units command_caps. The command should be called ORDER_MassTeleport.

- **radius** The radius around the teleporting unit that it can teleport other units.

- **phasing_duration** The time it takes for units to heal and become active on at the destination.

- **phasing_health_frac** The fraction of health they start with at the destination.

- **fixup_radius** The radius around the teleporting unit that units are healed.

- **energy_drain** The amount of energy drained per second.

- **energy_cost** The total amount of energy needed to teleport.

- **unit_cap**  The maximum amount of units that can be teleported by this unit

- **target_types** This acts in the same way as buildable units. You provide a logic based set of unit types and only units of those types will be teleported.

### Example

```json
mass_teleporter: {

 "radius": 20,
 "phasing_duration": 3,
 "phasing_health_frac": 0.5,
 "fixup_radius": 20,
 "energy_drain": 100,
 "energy_cost": 500,
 "unit_cap": 10,
 "target_types": "Bot & Mobile & basic"

}
```

### Notes

Much like teleporters the units being teleported need to have teleportable as a characteristic in either their specs or an inherited one.

There does exist an effect for this but it does not exist for any unit. Have a look into base_bot as I believe it has a reference to it.
