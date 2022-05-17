# 🤖 About Units
<br>
The units page contains a list of all the units and structures from several different factions and addons from Planetary Annihilation Titans.

<br>

### How to navigate
If you want to see the units of a faction or addon, click on the name of said faction or addon.

This will open up another dropdown containing the various unit types and by clicking on the unit type you will be able to see the units of said type.

<br>

### How to request a faction or addon
If you want to see any additional units from another expansion you can do so by forking the GitHub repository and then adding the factions in a folder structure as such:
```
Faction / Unittypes / Units
```
Additionaly you may also want to include additional directories such as ammo at:
```
Faction / ammo
```

Once the directories are setup correctly you will need to add the units to the units.json file in the root directory, they will then be visible in the units page.

the purpose of the units.json file is so that you can include dependencies for the units such as units or ammo from other expansions without them appearing under your dropdowns.

Once the fork is complete, you can then request the changes be made by sending a pull request via the main GitHub repository of said fork.

<br>
