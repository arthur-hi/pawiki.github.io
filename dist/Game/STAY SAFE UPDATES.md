# STAY SAFE UPDATES
May 28, 2020 - Nov 10, 2020

Hello Commanders,

Did you want to know what Planetary Annihilation Inc is doing to help you stay safe during COVID-19? No? Didn’t think so. Instead we’ve spent the time adjusting the dials, tweaking the numbers and fiddling the stats, all to create the new perfect™ balance. We’re making adjustments to make it easier to create your initial base, make tanks more viable as an early game option, and also make it easier to get into the orbital layer.

For the map makers among you, we fixed metal on the equator, allowed you to quickly create backups as you work, and height adjustments are now possible for terrain. You’ll need to dive into the pas files with your preferred text editor to make the changes, no fancy UI just yet, but it will allow you even more control over your creations. In return, don’t create systems with planets as far apart from one another as possible and orbital travel times so long they verge on the realistic. No one likes those systems. Please stop.

New support section on website (work in progress): https://planetaryannihilation.com/support/

Horsefly update: https://planetaryannihilation.com/news/horsefly-and-titans-1v1-ranked-mid-season-4-winners/

# TECHNICAL NOTES
## TITANS BALANCE CHANGES
Fixed attack (focus fire) delayed targeting and charging to their death for units with a firing delay, ballistic solutions, etc. eg Commander, Grenadier, Hornets, etc.

Queued area load and unload can now be used to create a temporary ferry.

Commander

 - Build range increased to 30 from 20
 - Faster and more accurate alt-fire ubercannon d-gun (114438)
 - Fixed all commanders to have identical mesh bounds based on base commander spec (114438)

Icarus Solar Drone
 - Speed increased to 50 from 30

Stryker attack vehicle
 - Speed increased to 20 from 15 (faster than Dox)

Grenadier
 - Rate of fire increased to 0.5 from 0.4
 - Range increased to 145 from 130
 - Yaw ranged increased to 135 from 90
 - Idle aim delay decreased to 0.5 from 1.0
 - Firing standard deviation decreased to 0.75 from 1.0

Drifter hover tank
 - Range increased to 115 from 100
 - Damage increased to 125 from 120

Pelter medium range artillery
 - Firing standard deviation increased to 0.5 from 0.35
 - Range decreased to 240 from 260

Orbital Launcher
 - Cost decreased to 1,500 from 2,000

Mend advanced combat fabricator (check the build range)
 - Can now build Anti-Nuke Launchers and Umbrella anti-orbital defenses

Anchor defense satellite
 - Ground weapon range reduced to 80 from 100

Jig gas mining platform
 - Metal production decreased to 30 from 36
 - Energy production decreased to 7,500 from 9,000

Piranha gunboat / sea scout:
 - Navigation changed to new water-hover (114438)

Stingray missile ship target priorities:

 - ``Air & ( Transport | Bomber | Gunship | Titan )``
 - ``Mobile & Air``

 
Narwhal frigate target priorities:

 - ``Air & ( Transport | Bomber | Gunship | Titan )``
 - ``Mobile & Air``
 
Horsefly advanced heavy strafing aircraft

 - Cost increased to 2,000 from 1,200
 - Health decreased to 1,250 from 1,500
 - No longer targets air
 
https://planetaryannihilation.com/guides/titans-balance-changes/

## CLIENT IMPROVEMENTS
 - Added support for interplanetary area and line formations with load / unload
 - Added control build range preview
 - Added official support link to start menu and removed community support link
 - Added alt / option alternative area build (114438)
 - Added max radius for alt / option alternative area build (114445)
 - Changed Armory to be available offline and show locked commanders not available to purchase without steam overlay (114473)

## CLIENT FIXES
 - Fixed black screen issue where load event for splash image failed to fire (patched by community mods)
 - Fixed strategic icons and fog of war lighting showing when units teleporting
 - Fixed invalid userIds causing empty friends list (114473)

## SYSTEM EDITOR IMPROVEMENTS
 - Added export to system editor for fast backups while creating maps
 - Added description, creator and version to system editor

## SYSTEM EDITOR FIXES
 - Fixed system editor metal sport validation
 - Fixed unselectable sunken CSG in system editor

## SERVER / SIM IMPROVEMENTS
 - Added continuous area load / chase and interplanetary area load / unload (queued area load / unload orders can be used for temporary ferry)
 - Added terrain height adjustments to planet builder
 - Added water-hover navigation type for low draft brown water navy access to shallows (114438)

## SERVER / SIM FIXES
 - Fixed transport / distance with teleport load / unload exploits
 - Fixed death explosion damaging their own wreckage
 - Fixed move sub tasks targeting a unit only targeting initial position resulting in missed air / orbital loads for moving units
 - Fixed nav agent targeting of lower layers by air / orbital not excluding radius of each agent resulting in missed loads as vertical move outside of goal range
 - Fixed attack (focus fire) charging to their death for units with a firing delay, ballistic solutions, etc
 - Fixed attack (focus fire) weapon targeting (114438)

## MODDING
 - Added to transporter spec
 - load_range
 - chase_range
 - Added alternative area builds to unit spec: (114438)
 - alt_area_build_separation
 - alt_area_build_type
 - alt_area_build_pattern
 - Added to unit state JSON for map units capture: (114438)
 - unit_spec
 - army [index]
 
## CONTENT CREATION
 - Added ``--no-sun`` and ``–-no-planets`` with hidden black biome for video capture using ``api.ar_system.changeSkyboxOverlayColor(0,0,0,1)``

## TERRAIN HEIGHT ADJUSTMENT EXAMPLE
```
{
    "name": "test",
    "description": "",
    "author": "",
    "version": "",
    "planets": [
        {
            "name": "test",
            "mass": 20000,
            "position_x": 13400,
            "position_y": 1200,
            "velocity_x": 17.19521141052246,
            "velocity_y": -192.0131072998047,
            "required_thrust_to_move": 0,
            "starting_planet": true,
            "respawn": false,
            "start_destroyed": false,
            "min_spawn_delay": 0,
            "max_spawn_delay": 0,
            "planet": {
                "seed": 1,
                "radius": 500,
                "heightRange": 100,
                "waterHeight": 50,
                "waterDepth": 100,
                "temperature": 100,
                "metalDensity": 50,
                "metalClusters": 50,
                "metalSpotLimit": -1,
                "biomeScale": 50,
                "biome": "grass",
                "symmetryType": "terrain and CSG",
                "symmetricalMetal": true,
                "symmetricalStarts": true,
                "numArmies": 2,
                "landingZonesPerArmy": 0,
                "landingZoneSize": 0,
                "heightAdjustments": [
                    {
                        "normalizedAdjustment": -0.5,
                        "radius": 200,
                        "pos": [
                            0,
                            0,
                            500
                        ]
                    },
                    {
                        "normalizedAdjustment": -0.5,
                        "radius": 200,
                        "pos": [
                            500,
                            0,
                            0
                        ]
                    }
                ]
            }
        }
    ]
}
```

JavaScript example of 10 equally spaced terrain height adjustments using golden circle for a 600 radius planet in the System Editor scene using the debugger:
```
(function(count, adjustment, radius)
{
    var planetRadius = model.radius();

    var increment = Math.PI * (3 - Math.sqrt(5));

    var offset = 2 / count;

    var adjustments = [];

    for (var k = 0; k < count; k++)
    {
        var y = k * offset - 1 + (offset / 2);
        var r = Math.sqrt(1 - y * y);
        phi = k * increment;
        adjustments.push({
            normalizedAdjustment: adjustment,
            radius: radius,
            pos: [planetRadius * Math.cos(phi) * r, planetRadius * y, planetRadius * Math.sin(phi) * r]
        });
    }

    model.heightAdjustments(adjustments);
    model.heightAdjustments.valueHasMutated();
    model.update_planet_spec();
    model.previewTerrainSelectedPlanet();

})(10, 1, 100)
```

Lave biome with generated terrain height adjustments:
```
{
    "name": "test",
    "description": "",
    "version": "",
    "planets": [
        {
            "name": "test",
            "mass": 20000,
            "position_x": 13400,
            "position_y": 1200,
            "velocity_x": -17.19521141052246,
            "velocity_y": 192.0131072998047,
            "required_thrust_to_move": 0,
            "starting_planet": true,
            "respawn": false,
            "start_destroyed": false,
            "min_spawn_delay": 0,
            "max_spawn_delay": 0,
            "planet": {
                "seed": 1,
                "radius": 600,
                "heightRange": 10,
                "waterHeight": 0,
                "waterDepth": 0,
                "temperature": 100,
                "metalDensity": 50,
                "metalClusters": 50,
                "metalSpotLimit": -1,
                "biomeScale": 50,
                "biome": "lava",
                "symmetryType": "terrain and CSG",
                "symmetricalMetal": true,
                "symmetricalStarts": true,
                "numArmies": 2,
                "landingZonesPerArmy": 0,
                "landingZoneSize": 0,
                "heightAdjustments": [
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            261.533935546875,
                            -540,
                            0
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            -315.9520263671875,
                            -420,
                            289.43792724609375
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            45.427738189697266,
                            -300,
                            -517.6256713867188
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            348.2481994628906,
                            -180,
                            454.2281188964844
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            -587.8665161132812,
                            -60,
                            -103.98531341552734
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            503.7155456542969,
                            60,
                            -320.422607421875
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            -148.58802795410156,
                            180,
                            552.7400512695312
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            -239.4943084716797,
                            300,
                            -461.1317443847656
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            402.4857482910156,
                            420,
                            146.98715209960938
                        ]
                    },
                    {
                        "normalizedAdjustment": 1,
                        "radius": 200,
                        "pos": [
                            -241.7477264404297,
                            540,
                            99.78994750976562
                        ]
                    }
                ]
            }
        }
    ]
}
```

## 114349 / 114353
Horsefly advanced heavy strafing aircraft

 - Cost increased to 2,000 from 1,200
 - Health decreased to 1,250 from 1,500
 - No longer targets air

## 114438
 - Updated translations
 - Added alt / option alternative area build
 - Four wide strips of land mines
 - Double walls
 - Nuke farm sphere
 - Double Galata Anti-Air
 - Double Flak Cannon Advanced Anti-Air
 - alt_area_build_type
 - alt_area_build_separation
 - alt_area_build_pattern
 - Added normalizedAdjustment property to terrain height adjustments with range -1 (water bottom) to 1 (max height)
 - Added water-hover navigation type for low draft brown water navy access to shallows
 - Changed Piranha gunboat / sea scout to new water-hover navigation type with new flat bottom model
 - Faster and more accurate alt-fire ubercannon d-gun
 - Fixed all commanders to have identical mesh bounds based on base commander spec
 - Fixed attack (focus fire) delayed targeting and charging to their death for units with a firing delay, ballistic solutions, etc. eg Commander, Grenadier, Hornets, etc

## 114445
 - Updated translations
 - Added alt / option alternative area build
 - Double Lob
 - Double Turret
 - Double Pelter
 - Double Catapult
 - Double Holkins
 - Added max radius for alt / option alternative area build
 - Land mine
 - Nuke Launcher
 - area_max_radius
 - alt_area_max_radius
 - Fixed alt / option area feature crash

## 114473
 - Updated translations
 - Changed Armory to be available offline and show locked commanders not available to purchase without steam overlay
 - Fixed invalid userIds causing empty friends list
 - Stingray missile ship target priorities:
 - Air & ( Transport | Bomber | Gunship | Titan )
 - Mobile & Air
 - Narwhal frigate target priorities:
 - Air & ( Transport | Bomber | Gunship | Titan )
 - Mobile & Air

## 114475
 - Updated translations
 - Fixed compatibility issue with some mods