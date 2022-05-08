# HORSEFLY UPDATES
Oct 5, 2019 - Jul 8, 2020

<img src="https://cdn.planetaryannihilation.com/wp-content/uploads/2019/10/horsefly-1024x722.png">
<br>
Hello Commanders,

BRRRRRRRRRRRRRRTTTTTT!

That’s the sound of the Horsefly exploding its way into Planetary Annihilation, the newest addition to your arsenal.

Found in the Advanced Air Factory and armed with rapid-fire cannons, it strafes targets to remove all the pesky AA (and fabbers) from the vicinity, while tanking return fire with its heavy armour. Conduct your bombing campaigns in peace once more. It will attack the land, it will attack the sea, and in a pinch it can even attack air.

For those of you running on Linux we have some good news: Planetary Annihilation will now work with Mesa when run within a Steam Proton environment. We continue to work with Coherent Labs on the native Linux issues.

We also have prizes to give out. The mid-season arrived, and with it the tightest contest for first yet. When the fires died down it was KillerKiwi who stood victorious among the wreckage. Congratulations to them, US$500 is on its way. We’ve also listed below the individuals from each league claiming the US$100 activity prizes, if you’re on that list and haven’t been contacted please raise a ticket with support. As ever, there will be further prizes issued at the end of the season (2019-10-25 00:00 UTC), so keep on fighting!

Some further adjustments to the air game have proven necessary, with Kestrel gunship damage slightly reduced. Flak has been adjusted to place greater emphasis on its splash, making it more of an anti-horde unit, while reducing its single target damage. The Storm mobile flak has also been given the ability to tilt its gun forwards and backwards to fire off a shot earlier against attacking bombers and to help it land shots in the middle of Kestrel gunship hordes, but it remains vulnerable when approached from the flank. The Angel advanced air support platform and Mend advanced combat fabricator can now auto reclaim the wreckage of your enemies or fallen comrades.

Finally, we’ve been improving various technical bits and bobs to continue enhancing performance, especially with loading of the UI and mods. SVG fonts are dead too. What’s an SVG font you ask? Look, it says SVG font in the technical notes, that’s all I know. Let’s mourn their passing together.

## TITANS 1V1 RANKED MID-SEASON 4 WINNERS
**Uber #1 (US$500)**: killerkiwi

**Most active players (US$100 each)**

Uber

 - clopse
 - smurf
 - admiralgeneral

Platinum

 - quaatal
 - mkfed
 - reynald009

Gold

 - aleks.clark 
 - bakkiz
 - neovalence

Silver

 - celestial deed
 - solumath
 - svalfish1

Bronze

 - 906797135
 - petermeffert
 - kuna

If you have not received your prize contact support via https://support.planetaryannihilation.com/

# TECHNICAL NOTES
## TITANS BALANCE CHANGES
 - Added Horsefly advanced heavy strafing aircraft!
 - Flak Cannon advanced anti-air
 - Changed to fire 4 beams
 - Damage decreased to 40 from 150
 - Splash damage decreased to 40 from 150
 - First target priority changed to Air & (Bomber | Gunship)
 - Range increased to 120 from 100 (113929)
 - Storm advanced mobile flak vehicle
 - Health increased to 400 from 300
 - Changed to fire 4 projectiles
 - Damage decreased to 15 from 60
 - Splash damage decreased to 10 from 30
 - Velocity increased to 100 from 60
 - Added pitch of 60 with pitch rate of 360
 - Second stage duration decreased to 300 from 700
 - First target priority changed to Air & (Bomber | Gunship)
 - Range increased to 100 from 80 (113929)
 - Kestrel advanced gunship
 - Damage decreased to 15 from 20
 - Wyrm advanced heavy siege bomber
 - Added heavy unit type UNITTYPE_HEAVY
 - Speed increased to 30 from 20 (113945)
 - Angel advanced air support platform
 - Can now manually reclaim wreckage / features and will auto reclaim nearby wreckage if nothing to repair
 - Speed increased to 40 from 30 (113945)
 - Health increased to 1,200 from 1,000 (113945)
 - Mend advanced combat fabricator:
 - Will now auto reclaim nearby wreckage if nothing to repair
 - Can now build Laser Defense Turret, Flak Cannon and Radar (113929)
 - Stryker attack vehicle, Ares hover titan, Atlas seismic titan and Zeus air titan mesh bounds adjusted
 - Amphibious units moving on the seafloor which are near the water or above the water surface can now be targeted as surface units (see below)
 - Lob Dox launcher range decreased to effective range of 240 (no change to existing behaviour and range circle will now be correct)
 - Dox assault bot, Slammer advanced assault bot, Stryker attack vehicle, Ant tank, Drifter hover tank and Leveler advanced tank can no longer target sea floor (113929)
 - Gil-E advanced sniper bot
 - Velocity increased to 1000 from 600 (113929)
 - Can now target Stingray Tactical Missile (113945)
 - Spinner anti-air vehicle range increased to 130 from 120 (113929)
 - Leveler advanced tank
 - Range increased to 140 from 120 (113936)
 - Velocity increased to 160 from 140 (113936)
 - Turn rate increased to 60 from 50 (113936)
 - Vanguard advanced heavy tank radar increased to 260 from 150 (113936)
 - Pelter short range artillery velocity increased to 160 from 150 (113936)
 - **Dox assault bot, Slammer advanced assault bot and Stryker attack vehicle can no longer target air (113945)**
 - Hornet advanced tactical bomber (113953)
 - Speed increased to 40 from 30
 - Can no longer target seafloor
 
 Note: patrol will not normally reclaim if economy is positive and metal storage is full. Auto reclaim units will always reclaim wreckage while patrolling.

For other recent balance changes see: https://planetaryannihilation.com/news/happy-birthday-update/

## CLIENT IMPROVEMENTS
 - Added simple DPS calculation using damage x rate of fire x projectiles per fire to build bar and unit hover
 - Added POV camera weapons aim tracking with smoother transitions
 - Coherent UI 2.6.8.x with faster rendering and macOS Catalina 10.15 64 bit support
 - New download manager with HTTP/2 and multiplexing for faster mod downloads and XHR
 - Improved UI caching and loading times
 - Improved readability of top economy bar in header
 - Improved readability of build bar hovers
 - Added radius to top right planet selector details

## CLIENT FIXES
 - Fixed memory leak in multi-threading async parallel for

## SERVER / SIM IMPROVEMENTS
 - Improved saving and loading of saved game / replay times up to 2.5x faster
 - Added amphibious units moving on the seafloor which are near the water or above the water surface can now be targeted as surface units eg Atlas titan is now targetable by any unit that target surface layers. Kestrel advanced gunships and Horsefly advanced strafer aircraft can target any unit as they appear out of water.
 - Added auto reclaim of nearby wreckage
 - Added reclaim of nearby wreckage to patrol for auto reclaim units

## SERVER / SIM FIXES
 - Fixed memory leak in multi-threading async parallel for

## AI IMPROVEMENTS
 - Added splash damage to DPS calculations
 - Added Phoenix advanced fighter
 - Added Piranha gunboat

## AI FIXES
 - Fixed average mobile health including structures in its calculations

## GALACTIC WAR FIXES
 - Fixed Phoenix advanced fighter buffs not being applied

## TOOLCHAIN
Updated software development toolchain: https://en.wikipedia.org/wiki/Toolchain

 - Visual Studio 2019 latest with 142 build tools / Windows 10 SDK latest
 - Xcode 11 / macOS 10.15.x latest for macOS Mavericks 10.9+
 - Latest steam linux runtime / GCC 6.2.0 (currently limited by Steam Linux runtime)
 - Steamworks SDK 146 with macOS Catalina 10.15 support for 64 bit only
 - Coherent UI 2.6.8.x with macOS Catalina 10.15 support for 64 bit only
 - Windows libcurl 7.66.0 with nghttp2 for HTTP/2 and multiplexing
 - Steam Proton compatibility
 - Fonts converted to WOFF and all UI  html and css updated

Note: PA Launcher is not currently supported on macOS Catalina 10.15 and will be updated later this year.

## AI MODDING
 - Added ``--al-debug`` for instrumentation
 - Dumps unit threat analysis on start for first AI (assumes all AIs are using the same unit list)Dumps per planet influence map on pause
 - Added ``--ai-log`` and ``--ai-debug`` to client which will pass through to local server
 - Added ``personality.ai_path`` to specify a different set of AI files for side by side testing of changes eg:
 ```
 Test: {
    ai_path: '/pa/ai2/',
    display_name: '!LOC:Test,
 ```
 - Added ``AdvancedFighter``, ``Strafer`` and ``Gunboat`` / ``SeaScout`` to AI unit maps
 - Added ``personality.percent_open_vehicle``, ``percent_open_bot``, ``percent_open_naval``, ``percent_open_air`` and ``percent_open_orbital`` to specify first factory percentages

## MODDING
 - Added ``auto_reclaim to build`` arm specs (same task as auto_repair)
 - Added ``projectiles_per_fire`` and ``dps`` to unit specs, build bar info and unit hover info
 - Added ``ignore_overshoot`` to nav specs to disable ``distanceToStartBraking`` warning
 - Added ``leash_behavior`` and ``leash_distance`` to nav specs to control unit assist behaviour (113801)
 - Mods may break in the following scenes if they make assumptions about layout:
 - start
 - gw_play
 - live_game_econ
 - settings

Mods may also break in any scene if they make assumptions about the social bar position.

https://caniuse.com/#compare=chrome+28,chrome+40 (not all features in that list are supported within Coherent UI 2.6.8.x)

SVG fonts are no longer supported in Chromium 40.

## 113801
Added leash_behaviour and leash_distance for Horsefly.

## 113895
Reworked start:

 - Responsive layout
 - New background
 - New watermark logo on top right
 - New build version displayed on top right
 - Classic style favourite or random commander
 - Improved events (from community mods)
 - Improved news
 - Improved videos
 - Improved streams
 - Improved mini leaderboard
 - Improved credits

Reworked settings: (work in progress)
 - Responsive layout

Reworked Galactic War card layout:
 - Responsive layout for system and inventory tech cards that should display all text clearly

Reworked live game eco bar: (work in progress)
 - Responsive mirrored layout highlighting the 3 key eco numbers (energy, efficiency, metal)

Reworked social bar visibility:
 - Assumes always visible with individual scenes like gw play and live game controlling visibility and layout
 - Live game handling via main scene has been disabled

Reworked main:
 - New splash handling

Reworked armoury:
 - Responsive layout
 - Improved TITANS upgrades
 - Improved handling when steam overlay not available

Reworked replays browser:
 - Responsive layout
 - Added winner (from community mods)

## 113909
 - Fixed live streams not clickable
 - Added ``stop_clears_nearby_targets`` for Horsefly advanced heavy strafer aircraft

## 113932 / 113929
 - Restored Coherent UI 2.6.8.x for Linux with fixes for boringssl/openssl segfault and mesa transparency.

TITANS Balance Changes

 - Dox assault bot, Slammer advanced assault bot, Stryker attack vehicle, Ant tank, Drifter hover tank and Leveler advanced tank can no longer target sea floor
 - Mend advanced combat fabricator can now build Laser Defense Tower, Flak Cannon and Radar
 - Gil-E advanced sniper bot velocity increased to 1000 from 600
 - Storm advanced mobile flak vehicle range increased to 100 from 80
 - Flak Cannon advanced anti-air range increased to 120 from 100
 - Spinner anti-air vehicle range increased to 130 from 120
 - Horsefly advanced heavy strafer aircraft assist removed

## 113939 / 113936
**TITANS Balance Changes**

 - Leveler advanced tank
 - Range increased to 140 from 120
 - Velocity increased to 160 from 140
 - Turn rate increased to 60 from 50
 - Vanguard advanced heavy tank radar increased to 260 from 150
 - Pelter short range artillery velocity increased to 160 from 150

## 113945
**TITANS Balance Changes**

 - **Dox assault bot, Slammer advanced assault bot and Stryker attack vehicle can no longer target air**
 - Wyrm advanced siege heavy bomber speed increased to 30 from 20
 - Hornet advanced tactical bomber speed increased to 40 from 30
 - Angel advanced air support platform:
 - Speed increased to 40 from 30
 - Health increased to 1,200 from 1,000
 - Gil-E advanced sniper bot can now target Stingray tactical missiles
 - Horsefly advanced heavy strafer aircraft health decreased to 1,500 from 1,800

## 113953
Hornet advanced tactical bomber can no longer target seafloor.

## KNOWN ISSUES
 - PA Launcher is not currently supported on macOS Catalina 10.15 and will be updated later this year
 - Some mods may break with the update from Chromium 28 to Chromium 40 in Coherent UI 2.6.8.x as a result of html, css, layout, rendering, js and font changes
 - Modern native Linux may black screen or corrupt (toggle full screen (alt+enter), resize or refresh (F5) may correct)
PA was built with modding in mind, and while we appreciate the contribution that mod authors make to our game, please remember that running mods can sometimes lead to unexpected defects and crashes, especially after a new update.

Before reporting any issues please ensure you test the game without mods enabled. Defects with mods should be reported to mod authors in the PA forums thread for each mod.