# RAINBOWS & UNICORNS UPDATES
Jun 25, 2020 - Jun 17, 2021

<img id="big" src="https://cdn.planetaryannihilation.com/wp-content/uploads/2020/06/unicorn-commander-1024x1024.png">
<br>
Scroll to the end for latest patch notes.

Hello Commanders,

Your eyes do not deceive you, this creature of majesty above is both half-Commander and half-unicorn. Touch its horn if you will, but the only wish it grants is the pillaging of the galaxy’s resources to ensure the demise of your enemies. Friendship is temporary, but a well-placed ubercannon is forever.

The Unicorn Commander is available to all players during the Steam Summer Sale, after which it can be purchased through the Armory. It also comes with its own strategic icon so that everyone else knows that you’re better than them, both as a player and a person.

Lobbies now have the option to shuffle player starting locations. No longer can you know who is where without any scouting in FFA and team games. Live the mystery.

The AI has had an easy difficulty added to skirmish and normal in Galactic War as part of some more extensive changes. We hear your eyebrow lift (just one, you’re classy like that) at the addition of an easier difficulty, but once improvements land and it’s kicking your hiney, you’ll be sorry you got all sniffy about an easy difficulty.

Translations have been updated and expanded to include community mods like Legion Expansion and Queller AI.

Balance changes: https://planetaryannihilation.com/guides/titans-balance-changes/

Previous update series: https://planetaryannihilation.com/news/stay-safe-updates/

# TECHNICAL NOTES
## CLIENT IMPROVEMENTS
 - Updated translations
 - Added connect timeouts to download manager to avoid long launch stalls
 - Added initial support for full offline / disconnected mode via --offline (work in progress)
 - Improved game password dialog with focus and default button
 - Added shuffle landing zones to new game lobby for large FFA and teams games using maps with custom landing zones
 - Improved discord user handling (114673)
 - Improved commander spawn zoom (114673)
 - Added spacebar to exit video (114673)
 - Improved locale error logging (114673)
 - Improved fatal error logging (114673)
 - Added audio device routing (114716)
 - Added default audio device setting with list refreshing every 5 seconds 114716)
 - Added default audio device selection during startup (114716)
 - Reduced unnecessary locks and allocations during material creation (114862)
 - Added automatic open of players list for 1v1 ranked games (114750)
 - Added ``--enable-detailed-minidump`` command line parameter as an alternative to setting the MINIDUMP_DIRECTORY environment variable (114750)
 - Added skybox graphics setting (114776)
 - Removed outdated sRGB restrictions for AMD / Intel GPUs (114880)
 - Added ``--gl-disable-srgb`` / ``--gl-disable-mrt-srgb`` command line options to restore previous behaviour if needed (114880)
 - Added ``--hardware-hdr`` command line option to enable experimental HDR10 support on latest Windows 10 for modern 10 series or newer Nvidia GPUs (114880)
 - Note: macOS HDR10 support is automatic
 - https://planetaryannihilation.com/support/troubleshooting/#HDR10
 - Added support for 128 bit UNITTYPE flags and masks expanding max types from 63 to 127 (114980)
 - Added SIMD optimisations for 128 bit flags (114980)
 - Added legacy CPU check with error message to try legacy build (114980)
 - Added events to ui/main/game/live_game/js/constants.js (114980)
 - ``Custom1``
 - ``Custom2``
 - ``Custom3``
 - ``Custom4``
 - ``Vehicle``
 - ``Shield``
 - ``Amphibious``
 - ``WaterHover``

Updated strategic icons for water hover units (115050)

 - Naval Basic Fabrication Ship
 - Barnacle support barge
 - Piranha gunboat

Updated water shader to show different depths (115280)

 - Water hover shallows
 - Deep water commander danger zone
 - Deep water

## CLIENT FIXES
 - Fixed SDL2 full screen toggle / resize issue on Windows (114628)
 - Fixed intro video loss of focus (114673)
 - Fixed tutorial commander specs (114716)
 - Fixed custom line formations crashes (114726 / 114823)
 - Fixed settings mod compatibility issue (114726)
 - Fixed join modded game crash from modded new game lobby or live game (114726)
 - Fixed landing crash on slower systems (114726)
 - Fixed setCommandMode crash (114759)
 - Fixed line command crash (114759)
 - Fixed API data access (114880)
 - Fixed get units crash (114880)
 - Fixed icons not showing with one or more unit server mods (115280)
 - Fixed handling of Unicode surrogates eg 🔥 (115447)

## AI IMPROVEMENTS
 - Added easy difficulty for AI skirmish to match galactic war (work in progress)
 - Improved AI start location selection (114716)
 - AI landing policies now avoid planets with others AIs so they spread across planets (115050)

## GALACTIC WAR IMPROVEMENTS
 - Added normal difficulty between easy and hard (work in progress)
 - Added Default personality placeholder to gw minions (114716)

## SERVER / SIM IMPROVEMENTS
 - Improved attack (focus fire) task
 - Added shuffle landing zones
 - Added early exit for sim tasks that set failed during initialisation (114673)
 - Added radar jamming (114862)
 - Added support for 128 bit ``UNITTYPE`` flags and masks expanding max types from 63 to 127 (114980)
 - Added SIMD optimisations for 128 bit flags (114980)
 - Add new units types
 - ``UNITTYPE_Vehicle (114980)``
 - ``UNITTYPE_Shield (114980)``
 - ``UNITTYPE_Amphibious (114980)``
 - ``UNITTYPE_WaterHover (114980)``
 - ``UNITTYPE_Interplanetary (115506)``
 - ``UNITTYPE_TacticalDefense (115506)``
 - ``UNITTYPE_Radar (115506)``
 - ``UNITTYPE_RadarJammer (115506)``

## SERVER / SIM FIXES
 - Fixed AI server crash in evaluateBases
 - Fixed server crash for modded units with ORDER_Attack and no weapons (114673)
 - Fixed target priorities vision (114716)
 - Fixed Windows 4GB replay / saved game limit (114862)
 - Fixed moving to target assist task crash (114862)
 - Fixed auto repair / reclaim while transporting (114862)
 - Fixed water-hover pathing around structures, walls, TITANS, etc (114980)
 - Fixed handling of Unicode surrogates eg 🔥 (115447)
 - Fixed beam weapon collisions with structures, terrain and water surface (115447)

## MAPS
 - Added ``shuffleLandingZones``
 - Updated the following maps to use ``shuffleLandingZones: true``
 - Clutch
 - Lock
 - Crag
 - Bedlam
 - PAX
 - Medea
 - Roc
 - Blitz
 - Forge
 - Berg
 - Duat
 - Pacific
 - Styx
 - Meso
 - Amplus

## MODDING
 - Exposed ``locTree`` for localislation parsing of modified DOM nodes avoiding the need for concatenated loc strings or data-binding
 - ```
 - locTree(document.getElementById('#nav-link'));
 - ```
 - Added ``gOffline`` and ``gModsOffline`` for offline mode (work in progress)
 - Added ``api.audio.getDevices():[string]``
 - Added ``api.audio.setDevice(string)``
 - Reworked ``SettingItemModel`` to support
 - ``options.function(currentValue)``
 - ``options.deferredFunction(currentValue)`` for async
 - ``options.refresh: seconds``
 - ``option.empty: string``
 - Added support for JSON // single line comments
 - Improved modding support for multiple selectable skybox mods in settings: (114776)
```
model.skyBoxes.push({text: 'Test', value: '/pa/terrain/sky/textures/skybox_02.json'})
api.ar_system.changeSkyBoxSpec(api.settings.getSynchronous('graphics', 'skybox'));
```
 - New recon observer channel (114862)
 - ``radar_jammer``

## AI MODDING
 - ``Default`` personality tag is the placeholder for current base game functionality
 - Added fall back to default netural_networks if not included under ``personality.ai_path`` which will be the case for most mods
 - Added additional ``--ai-debug`` output (114673)
 - Added ``enabled`` to build specs for AI debugging (114673)
 - Added ``debug`` to build conditions for AI debugging (114673)
 - Added ``IsMainBase`` build condition (114673)
 - Added first pass of AI intel point threat status (114673)
 - Added ``personality.starting_location_evaluation_radius`` (114673)
 - Added gw mod support for ``bounty_mode``, ``bounty_value``, ``sudden_death_mode``, ``shuffle_landing_zones`` and ``land_anywhere`` (114716)

AI mods can use ``personality.ai_path`` to specify their own complete set of templates, builds and unit maps as the default AI may be changing significantly


## TOOLCHAIN
Updated software development toolchain: https://en.wikipedia.org/wiki/Toolchain

 - C++17
 - Visual Studio 2019 latest with 142 build tools / Windows 10 SDK latest
 - Xcode 11.5 / macOS 10.15.x latest for macOS Mavericks 10.9+ with full notarisation using hardened runtime
 - Steam Linux runtime with gcc-9 / LTO native (previously limited to gcc 6.2 and no LTO)
 - Steamworks SDK 148 (will upgrade to 149 soon)
 - Windows libcurl 7.68.0 with nghttp2 1.40.0 for HTTP/2 and multiplexing (will upgrade to 7.70.0 and 1.41.0 soon)
 - breakpad latest
 - libpng 1.6.37 with SSE optimisations
 - libsquish 1.15 with SSE optimisations
 - stb_image 2.25
 - stb_truetype 1.24
 - lz4 1.9.2
 - miniz 2.1
 - zlib 1.2.11
 - sdl 2.0.12

## 114618
 - Fixed missing Unicorn Commander build image
 - AI tweaks

## 114628
 - Fixed SDL2 full screen toggle / resize issue on Windows
 - Changed libpng 1.6.37 SSE optimisations for older CPU on Windows (use legacy build for older CPUs)

## 114673
 - Updated translations
 - Updated Steam Linux runtime
 - Improved discord user handling
 - Improved commander spawn zoom
 - Added current zoom type support to api.camera.lookAt
 - Added early exit for sim tasks that set failed during initialisation
 - Added spacebar to exit video
 - Fixed intro video loss of focus
 - Improved locale error logging
 - Improved fatal error logging
 - Fixed server crash for modded units with ORDER_Attack and no weapons

AI modding

 - Added additional --ai-debug output
 - Added enabled to build specs for AI debugging
 - Added debug to build conditions for AI debugging
 - Added IsMainBase build condition
 - Added first pass of AI intel point threat status
 - Added personality.starting_location_evaluation_radius

## 114716
 - Updated translations
 - Added audio device routing
 - Added default audio device setting with list refreshing every 5 seconds
 - Added default audio device selection during startup
 - Added Default personality placeholder to gw minions
 - Improved AI start location selection
 - Fixed target priorities vision
 - Fixed tutorial commander specs

AI Modding

 - Added gw mod support for ``bounty_mode``, ``bounty_value``, ``sudden_death_mode``, ``shuffle_landing_zones`` and ``land_anywhere`` 
 
Modding

 - Added ``api.audio.getDevices():[string]``
 - Added ``api.audio.setDevice(string)``
 - Reworked ``SettingItemModel`` to support
 - ``options.function(currentValue)``
 - ``options.deferredFunction(currentValue)`` for async
 - ``options.refresh: seconds``
 - ``option.empty: string``
 - Added support for JSON // single line comments

## 114726
 - Fixed custom line formations crash
 - Fixed settings mod compatibility issue

## 114750
 - Updated translations
 - Added automatic open of players list for 1v1 ranked games
 - Added ``--enable-detailed-minidump`` command line parameter as an alternative to setting the ``MINIDUMP_DIRECTORY`` environment variable
 - Fixed join modded game crash from modded new game lobby or live game
 - Fixed landing crash on slower systems

## 114759
 - Updated translations
 - Fixed setCommandMode crash
 - Fixed line command crash

## 114776
 - Updated translations
 - Added skybox graphics setting
 - Improved modding support for multiple selectable skybox mods in settings:
```
model.skyBoxes.push({text: 'Test', value: '/pa/terrain/sky/textures/skybox_02.json'})
api.ar_system.changeSkyBoxSpec(api.settings.getSynchronous('graphics', 'skybox'));
```

## 114780
 - Updated TITANS 1v1 ranked maps and reconnects

## 114803
Grenadier

 - Idle aim delay restored to 1.0 from 0.5
 - Max firing velocity decreased to 80 from 90
 - Min firing velocity decreased to 70 from 85
 - Splash radius decreased to 5 from 6

Gil-E advanced sniper bot
 - Vision and range decreased to 200 from 220
 - Can no longer target seafloor

Naval Basic Fabrication Ship
 - Navigation changed to new water-hover with updated flat bottom model

Barnacle support barge
 - Navigation changed to new water-hover with updated flat bottom model
 - Can now build teleporters on land

## 114823
 - Updated translations
 - Fixed custom line formation crash

Grenadier
 - Maximum firing velocity increased to 90 from 80

## 114862
## CLIENT IMPROVEMENTS
Updated translations
Reduced unnecessary locks and allocations during material creation

## SERVER / SIM IMPROVEMENTS
Added radar jamming

## SERVER / SIM FIXES
Fixed Windows 4GB replay / saved game limit
Fixed moving to target assist task crash
Fixed auto repair / reclaim while transporting

## BALANCE CHANGES

Grenadier
 - Splash damage decreased to 30 from 40

Slammer advanced assault bot
 - Damage decreased to 90 from 100

Vanguard advanced heavy tank
 - Radar jamming 75 added

Typhoon drone carrier
 - Squall torpedo damage decreased to 75 from 100

Jig gas mining platform
 - Cost increased to 4,000 from 3,000

## 114880
## CLIENT IMPROVEMENTS
 - Updated translations
 - Reduced unnecessary locks and allocations during material creation
 - Removed outdated sRGB restrictions for AMD / Intel GPUs
 - Added ``--gl-disable-srgb`` / ``--gl-disable-mrt-srgb`` command line options to restore previous behaviour if needed
 - Added ``--hardware-hdr`` command line option to enable experimental HDR10 support on latest Windows 10 for modern 10 series or newer Nvidia GPUs

Note: macOS HDR10 support is automatic.

https://planetaryannihilation.com/support/troubleshooting/#HDR10

## CLIENT FIXES
 - Fixed API data access
 - Fixed get units crash

## 114980
 - Added support for 128 bit ``UNITTYPE`` flags and masks expanding max types from 63 to 127
 - Added SIMD optimisations for 128 bit flags
 - Add new units types:
 - ``UNITTYPE_Vehicle``
 - ``UNITTYPE_Shield``
 - ``UNITTYPE_Amphibious``
 - ``UNITTYPE_WaterHover``

## CLIENT IMPROVEMENTS
 - Updated translations
 - Added legacy CPU check with error message to try legacy build
 - Added missing events to ui/main/game/live_game/js/constants.js
 - ``Custom1``
 - ``Custom2``
 - ``Custom3``
 - ``Custom4``
 - ``Vehicle``
 - ``Shield``
 - ``Amphibious``

## SERVER / SIM FIXES
Fixed water-hover pathing around structures, walls, TITANS, etc

## BALANCE CHANGES

Grenadier
 - Acceleration decreased from 120 to 100

Added UNITTYPE_Vehicle for wheeled units vs treads

 - Advanced Fabrication Vehicle
 - Skitter vehicle scout
 - Stryker attack vehicle
 - Spinner anti-air vehicle

Added UNITTYPE_Shield placeholder.

Added UNITTYPE_Amphibious

 - Commander
 - Dox
 - Slammer
 - Colonel
 - Manhattan
 - Atlas

Added ``UNITTYPE_WaterHover`` and are no longer targetable by below the waterline naval torpedoes

 - Naval Fabrication Ship
 - Barnacle support barge
 - Piranha gunboat

Note: This excludes amphibious torpedoes from:

 - Commander
 - Slammer advanced assault bot

Removed ``UNITTYPE_Scout`` from Piranha gunboat.

The following naval below the waterline torpedo weapons no longer target ``UNITTYPE_WaterHover`` with ``"exclude_unit_types": "Hover | WaterHover"``

 - Torpedo Launcher
 - Advanced Torpedo Launcher
 - Barracuda sub
 - Orca destroyer
 - Kraken advanced stealth sub
 - Typhoon carrier drone

## MODDING
 - Added the following for testing by modders when enabled in ``boot.json``
 - ``knockout-3.5.1.min.js`` / ``knockout-3.5.1.debug.js`` (swap wth ``knockout-3.4.0.min.js``)
 - ``lodash-migrate.min.js`` / ``lodash-migrate.js`` (enable to see and report potential issues with lodash 3.x > 4.x)
 - ``lodash-4.7.20.min.js`` / ``lodash-4.7.20.js`` (swap with ``lodash-3.9.3.min.js`` to see breakage)

## 115003
 - TITANS 1v1 Ranked Season 9
 - Updated translations

## 115013
 - Fixed regression of unit selection type counts
 - Updated translations

## 115050
 - Updated translations
 - Updated strategic icons for water hover units
 - Naval Basic Fabrication Ship
 - Barnacle support barge
 - Piranha gunboat
 - AI landing policies now avoid planets with others AIs so they spread across planets

## BALANCE CHANGES
Stryker attack vehicle
 - Speed decreased to 18 from 20 (same as Dox)

Ant light tank
 - Turn rate increased to 120 from 90

Grenadier
 - Vision decreased to 125 from 130

Spark tesla bot
 - Range increased to 70 from 65

Mend advanced combat fabricator
 - Cost decreased to 1,000 from 1,200

Spinner anti-air vehicle
 - Rate of fire decreased to 2.4 from 3

Piranha gunboat
 - Range decreased to 120 from 130

Barracuda submarine now has radar stealth

Horsefly advanced heavy strafing aircraft
 - Cost decreased to 1,800 from 2,000

Angel advanced air support platform
 - Cost decreased to 5,000 from 5,500

Mines changed to sight vision which now reveal units and target radar stealth


## 115186
Dox assault bot
 - Acceleration increased to 180 from 50

Advanced Metal Extractor
 - Production rate increased to 16 from 15

## 115280
 - Updated water shader to show different depths
 - Water hover shallows
 - Deep water commander danger zone
 - Deep water
 - Fixed icons not showing with one or more unit server mods
 - Legion Expansion
 - Second Wave – Units addon
 - Aurora Artillery

## 115447 / 115459
## CLIENT / SERVER FIXES
 - Fixed handling of Unicode surrogates eg 🔥

## SERVER / SIM FIXES
 - Fixed beam weapon collisions with structures, terrain and water surface

## BALANCE CHANGES
Commander
 - Can now build orbital launchers and umbrellas

 - Icarus Solar Drone
Beam weapon now collides with enemies, structures, terrain and water surface

Orbital Launcher

 - Cost decreased to 600 to match T1 factories
 - Commander buildable

Orbital Factory
 - Cost increased to 6,000 from 3,600

Umbrella
 - Commander buildable

Anchor
 - Beam weapon now collides with enemies, structures, terrain and water surface

SXX-1304 laser platform

 - Beam weapon now collides with enemies, structures, terrain and water surface
 - Underwater vision removed

Artemis railgun platform
 - Beam weapon now collides with enemies and structures

Omega orbital battleship

 - Beam weapon now collides with enemies, structures and terrain
 - Can now target seafloor
 - Now has underwater vision of 200

Helios orbital titan
 - Beam weapon now collides with enemies, structures and terrain

Dox assault bot
 - Speed increased to 19 from 18

Grenadier
 - Vision decreased to 115 from 125

Storm mobile flak
 - Removed underwater vision

## 115482
 - TITANS 1v1 Ranked Season 10
 - Translations

## 115506 / 115521 / 115529
 - Upgraded AWS servers in all regions with faster CPUs and more RAM (c5n > m5zn instances)
 - Fixed missing unit types (115521)
 - Fixed spurious unit alerts (115521)
 - Gnugfur commander is now FREE (115529)

New unit types:

 - ``UNITTYPE_Interplanetary``
 - ``UNITTYPE_TacticalDefense``
 - ``UNITTYPE_Radar``
 - ``UNITTYPE_RadarJammer``

## BALANCE CHANGES
Grenadier range decreased to 140 from 145

Catapult tactical missile launcher

Rate of fire increased to 0.4 from 0.2
Cost increased to 2,000 from 1,800
Holkins long range artillery cost increased to 10,000 from 9,600

Orca destroyer torpedo range decreased to 145 from 150

Orbital Fabrication Bot surface radar changed to surface vision


## 115546
 - Improved multi-threading on upgraded AWS servers
 - Fixed client crashes caused by mods

## 115678 / 115693 / 115711
 - Fixed ALWAYS order and build previews ignoring SELECTED
 - Changed amphibious units on sea floor to require underwater vision if below the water line (115693)
 - Added SELECTED OR ALL to order and build previews (115711)

## BALANCE CHANGES
AA target priorities now include Icarus solar drone.

Underwater vision removed for all non amphibious land units.

Spark vision decreased to 120 from 130.

Grenadier vision decreased to 100 from 115.