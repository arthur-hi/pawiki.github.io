# HAPPY BIRTHDAY STRYKER UPDATES
Aug 18, 2019 - May 18, 2021

<img src="https://cdn.planetaryannihilation.com/wp-content/uploads/2019/08/stryker-768x768.png">
<br>
113583 / 113600 Balance Changes

Hello Commanders,

War never changes. At least that’s what they say, yet on 18th August 2019 we celebrated one year since Planetary Annihilation Inc took over development of this mighty game, and what an exciting year of change it has been.

Modernisation of the underlying tech foundation was a big goal for us when we started. We have modernised the entire development toolchain, helping to reduce defects and improve performance. We have also upgraded the Coherent UI framework and eliminated numerous crashes. At this point if your client is crashing you probably need to update your graphics drivers. We are aware of the Linux Mesa issues so please hang tight, we’re working on it!

A huge amount of effort has been put into the server, given that it is responsible for most of the heavy lifting. We have spent a lot of time improving performance, both through changes to the AI and the mechanisms that underpin the simulation. That includes more multi-threading, more optimisation and of course less crashes. You can now get buttery smooth performance on systems and setups that would have been unthinkable a year ago.

Aiding this has been the migration to PAnet, our modern backend infrastructure. Better servers mean bigger and better games and a happier community.

Single player is still incredibly popular among our community so AI updates have remained a big focus. We keep making it smarter and deadlier, so if you are struggling to win more than before, it’s not you it’s us.

Multiplayer is not forgotten either and the ranked queue is feeling more active than ever before, with seasons ensuring everyone gets their chance to shine with map rotation and balance changes keeping it fresh. Add to that a prize pool of US$4,500 per season to keep it competitive.

Of course, while it is pleasant to feast on cake and grow fat we can’t just rest on our laurels, there is a lot of work we still want to do and a gift we want to give.

**The Stryker takes on the role of a fast, low armoured raider. Giving vehicles more of an early presence, you can keep the pressure on your opponent while also defending your valuable fabbers against Dox.**

The time of the Navalpocalypse is upon us, with ships now enjoying FTL (Faster Than Land) propulsion. The person who came up with this term is very pleased with themselves, don’t let it catch on or they’ll become insufferable. No longer will your naval games feel like an eternal slog, instead they will be more of an elegant duel with massive guns. There has also been a significant adjustment to the Typhoon to improve its viability and enable Squall swarms to blot out the sun, as the prophecy foretold.

Finally, we have made more improvements to the AI’s performance so that it will wait patiently and put its hand up, ensuring it is less demanding of your CPU’s time. This may be the most significant performance improvement we have made so far in our AI.

It has been a great year and we look forward to an even better one to follow.

Recap:
 - modernised client
 - modernised server with more multi-threading and AI improvements
 - PAnet migrated from UberNet with modern servers and more regions
 - 1v1 ranked seasons with new maps, balance changes and a US$4,500 prize pool every 3 months
 - Stryker!

# TECHNICAL NOTES
## TITANS BALANCE CHANGES
 - Stryker (113578)
 - Naval speeds increased
 - Narwhal frigate speed increased to 12 from 9
 - Orca destroyer speed increased to 12 from 9
 - Stingray missile ship speed increased to 11 from 8
 - Leviathan battleship speed increased to 11 from 8
 - Typhoon drone carrier
 - Typhoon drone carrier speed increased to 11 from 8
 - Cost decreased to 5,200 from 6,500
 - Ammo rate increased to 30 metal per second (20 stored drones then one per second once depleted)
 - Initial launch stage decreased to 200 from 500 (shorter launch before turn)
 - Now targets sea floor
 - Guard layer changed to WL_AnyLayer from WL_AnySurface with guard radius of 100 (113583)
 - Launch projectile lifetime changed to 3.0 from 2.0 (113583)
 - Squall drones
 - Weapons priority changed to torpedoes
 - Torpedo rate of fire increased to 0.8 from max 1 (up to 10 low damage torpedoes depending on range to target)
 - Kestrel gunships:
 - Can no longer target underwater layer (subs)
 - Cost increased to 800 from 600 (113600)
 - Changed manual targeting of Galata AA to only damage air (113600)

## CLIENT IMPROVEMENTS
 - –local-server-port to use a different local server port
 - Added build bar size which can now be changed from 75% to 200% separately from GUI size (113578)
 - Changed settings (113578):
 - Moved resolution scaling to top of graphics tab
 - Duplicated GUI size at top of graphics tab
 - Added build bar size to graphics tab and gameplay tab > user interface


## CLIENT FIXES
 - Hopefully fixed build bar hot keys not always working (113578)

## AI IMPROVEMENTS
 - AI now processes path requests over time rather than all at once which should help smooth AI performance
 - Multiple small AI performance improvements

## AI FIXES
 - AI platoons that fail to find a path back to base when disbanding will now try a direct move request as a last resort

## 113578 / 113581
Stryker is now live with build bar changes.

## MODDING
 - Added id to each unit spec
 - Added projectile_specs with basic info and projectile: true for buildable projectiles in each unit spec
 - Added buildable projectiles to unit specs with merging of projectile ammo info if already in unit list (removing the need for ammoBuildHover hacks)
 - Added unit specs to settings
 - build bar is now flexible in width and no longer restricted to 3 x 6
 - build bar entries are now specified as row / column with titans only / classic only flags
```
"/pa/units/land/attack_vehicle/attack_vehicle.json": ["vehicle", 20, {row: 2, column: 6, titans: true}]
"/pa/units/orbital/deep_space_radar/deep_space_radar.json": ["utility", 2, {row: 0, column: 2, classic: true}]
```

## 113583
 - Stryker health increased to 60 from 50 (may tweak further)
 - Typhoon drone carrier
 - Guard layer changed to WL_AnyLayer from WL_AnySurface with guard radius of 100
 - Launch projectile lifetime changed to 3.0 from 2.0 (should resolve disappearing squalls)

## 113600
 - Stryker strategic icon updated, accelerate / brake increased to 150 from 100 and now targets sea floor
 - Kestrel gunship cost increased to 800 from 600
 - Changed manual targeting of Galata AA to only damage air