<h1>
    Armor Types
    <p>by Ferret-Master<br>from <a href="https://github.com/Ferret-Master/Planetary-Annihilation-Modding-Documentation" target="_blank">GitHub</a></p>
</h1>

Armor types are used as a way to modify damage against certain kinds of units, most units have them defined in their base file


```json
"armor_type":"bot"
```

## Fields

- **armor_type**

used in the unit file to define a units armortype, is done in the base files for most units
```json
"armor_type":"bot"
```
- **armor_damage_map**

used in ammo files to adjust how much damage that ammo will deal vs units with the listed armor type, unspecifiedm types will act as 1.0

e.g the nuke armor map
```json
  "armor_damage_map": {
    "AT_Commander": 0.33,
    "AT_Orbital": 0.33
  },
```

### Armor Type List
- AT_Commander
- AT_Orbital
- AT_Air
- AT_Bot
- AT_Vehicle
- AT_Hover
- AT_Naval

### Notes

In general armor types are avoided in both base pa and modding, the primary use is to stop pbaoe ammo from damaging things it should not like air and orbital

If you are going to use armor types try and keep it related to commander survivability or layer interactions
these would include things like ground to orbital and back when you have weapons that can target both.
