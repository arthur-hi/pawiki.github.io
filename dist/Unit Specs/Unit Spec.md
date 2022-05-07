# Unit Spec

Some of the below info is sourced from https://forums.planetaryannihilation.com/threads/reference-unit-blueprints.47378/

A big reason for making this documentation was the missing values or lacking descriptions for some values in that existing info.

areas that are complete in this original documentation will say to refer to it.

Units in PA are defined using the JSON format, if you are unfamiliar with this format read the following short explanation.

- Json files are effectively an object and defined by having two {} brackets around zero or more fields that have attached values.

- A field is defined with quotes on either side followed by a colon then the value you wish that field to have. E.g "radius": 4

- A Json needs commas in between fields but not after the last field

- A field can also have another object as its value that can have its own fields and values. This is used for many of the fields in a unit spec.

- Example Below

```json
"model": {
"filename": "/pa/units/land/assault_bot/assault_bot.papa",
"animations": {
    "death01": "/pa/units/land/assault_bot/assault_bot_anim_death01.papa",
    "walk": "/pa/units/land/assault_bot/assault_bot_anim_run.papa",
    "idle": "/pa/units/land/assault_bot/assault_bot_anim_idle.papa",
    "aim_up": "/pa/units/land/assault_bot/assault_bot_anim_aim_up.papa",
    "aim_down": "/pa/units/land/assault_bot/assault_bot_anim_aim_dwn.papa"
},
"animtree": "/pa/anim/anim_trees/bipedal_mech_anim_tree.json",
"walk_speed": 20
}
```

- This example includes the model field and its value which is another object. This object contains fields for the filename,animations,animtree, and walkspeed. Some of these fields also have an object as its value.

If the above explanation didn't make sense I recommend looking into the JSON format as understanding it is needed for unit modding.

## File types that may be mentioned

- **example.papa** This file is the format PA stores its model information in, it is also used for animations and textures.

- **example.fbx** This file is the format pa uses for its particle system and most of the effects you see in game are defined in this format. If you want an detailed explanation of the particle system see the link and attached document in that link. [https://wiki.palobby.com/wiki/Particle_System_Reference]

The Unit Spec is the main spec of the unit and contains all info needed for a units behaviour, stats, and appearance.

The less self explanatory fields will be given syntax examples/extended explanations and fields with more complex behaviour or many subfields will have their own document referenced.

## Fields

### **model**

This field includes several subfields

- **filename** The path to the file from the top level directory of the game/your mod. The file format is papa which is the

- **animations** An object that contains a field for each name and papa file animation that are based on unit state. See above json example

- **animtree** A json file that links animations to actions

- **walk_speed** Modifies the speed of the walking animation

- **skirt_decal** A json file that defines the ground texture below buildings

### **unit_name**

The internal name of the unit. I am not aware of any restrictions but keeping the name short, readable and somewhat related to the units design is preferred. This is defined by the name of the json file.

### **display_name**

The name the player sees whenever they interact with the unit. Keeping it short, understandable and memorable is preferred. Having the name be somewhat related to its purpose is a bonus.

PA does have some traditional naming conventions but they will not be covered here.

### **description**

The text the player sees when mousing over the unit in a factory. Keeping this relatively short and understandable is good but make sure it accurately reflects what the unit can do.

Things that are important to cover are the type of unit, the layers it can be expected to target and its behaviour.

e.g The description of the dox is "Basic Infantry - Fast, adaptable, expendable. Amphibious. Attacks surface targets when on land."

This description lets us know the capability of this unit without ever using it to a high degree.

descriptions can be localised for other languages with !LOC: put at the start but I do not believe this is needed unless the developer supports your mod in the games localisation files.

### **mesh_bounds**

The size of the units hitbox

### **wreckage_mesh_bounds**

The size of a wreckages hitbox

### **placement_size**

The size the unit takes up when placed, important for buildings for preview and packing purposes.

This will usually be larger than the mesh bounds as the model if smaller than the base and you also want a slight difference for most buildings to allow unit pathing between them.

### **area_build_separation**

See *Area Build Info*

### **area_build_pattern**

See *Area Build Info*

### **TEMP_texelinfo**

Used for a shader, copy from a similar sized base game unit.

### **spawn_layers**

The world layer that the unit will spawn in when made

See *World Layers*

### **build_metal_cost**

The metal cost of the unit

### **consumption**

The amount of metal/energy the unit consumes.

Keep in mind consumption will stop when the units energy order is disabled.

e.g

```json
"consumption": {
    "energy": 7500,
    "metal": 30
  }
```

### **production**

The amount of metal/energy the unit produces.

e.g

```json
"production": {
    "energy": 7500,
    "metal": 30
  }
```

I believe this can be negative but consumption is usually better for that. There may be some issues with the production visual on screen if set to negative values as well.

### **storage**

The amount of metal/energy the unit can store.

e.g

```json
 "storage": {
    "energy": 45000,
    "metal": 1500
  }
```  

### **energy_efficiency_requirement**

A value from 0-1.0

A unit will perform any actions requiring energy if your energy efficiency is above the provided value.

### **atrophy_rate**

How fast a unit decays

### **atrophy_cool_down**

How long until a unit starts decaying

### **passive_health_regen**

How much HP a unit gains per second. Negative values work.

Positive values are problematic as you can reclaim the unit for free metal.

Commonly used with negative values for drone type units.

### **max_health**

The health of the unit

### **wreckage_health_frac**

The fraction of the units health the wreckage will have.

### **factory_cooldown_time**

Time the factory has to wait between units leaving it and building a new one

### **wait_to_rolloff_time**

How long a finished unit will wait before leaving the factory

### **rolloff_dirs**

A vector that defines valid points for factory rolloff

bot_factory example

```json

"rolloff_dirs": [
    [
      0,
      1,
      0
    ],
    [
      0,
      -1,
      0
    ]
  ],

```

### **buildable_projectiles**

An array of projectile json's.

e.g

```json
"buildable_projectiles": [
    "/pa/units/land/anti_nuke_launcher/anti_nuke_launcher_ammo.json"
  ],

```

### **buildable_types**

Defines what types of units a factory/fabber can make.

Format is quotes around a combination of unit type using some logic,
 || = OR
& = AND

bot_factory example "(Bot & Mobile & Basic & FactoryBuild) - Custom1 - Custom2 - Custom3 - Custom4"

### **command_caps**

The commands that the unit can use, this is important as some unit functions require certain commands to be enabled.

Format is an array of commands

e.g "command_caps": [
    "ORDER_Move",
    "ORDER_Patrol",
    "ORDER_FactoryBuild",
    "ORDER_Reclaim",
    "ORDER_Repair",
    "ORDER_Attack",
    "ORDER_Assist",
    "ORDER_Use"
  ],

### **unit_types**

An array of unit types
See *Unit Types*

### **display_group**

Determines the order this unit will appear in build menus (Higher numbers first).
This is usually defined in the build.js file instead nowadays.

### **display_index**

Determines the display order of strategic icons (Icons with higher numbers will appear above lower ones)
This is usually defined in the build.js file instead nowadays.

### **guard_radius**

The radius the unit uses for acquiring targets. The unit will use it's max weapon range instead if it is larger

### **guard_layer**

The layer on which the unit will attempt to look for targets

Some values don't work properly, the following are known to work.

"WL_Air",
 "WL_AnySurface",
 "WL_Land"

### **audio**

See https://forums.planetaryannihilation.com/threads/reference-unit-blueprints.47378/ under Audio

### **events**

See https://forums.planetaryannihilation.com/threads/reference-unit-blueprints.47378/ under Events

### **headlights**

See https://forums.planetaryannihilation.com/threads/reference-unit-blueprints.47378/ under Headlights

### **armor_type"**

defines the armor type of a unit, for more info see Armor Types

```json
"armor_type":"bot"
```



### **testy**



### **testy**



### **testy**



### **testy**




## **Examples**

A few complete examples will be listed here with the units being from the base game.
