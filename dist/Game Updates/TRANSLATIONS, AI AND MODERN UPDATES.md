# TRANSLATIONS, AI AND MODERN UPDATES
Mar 8, 2019 - Jun 29, 2019

<img id="big" src="https://cdn.planetaryannihilation.com/wp-content/uploads/2019/03/113034-1024x640.png">

Hello Commanders,

With the successful launch of TITANS 1v1 ranked ladder season 2 with new leaderboards it’s back to toiling away in the update mines.

In the background, work continues on our tech upgrade and the prerequisites necessary to transition to the new PAnet infrastructure. While these 2019 long-term goals remain long-term, we still want to deliver some additional improvements to the game that is currently in your hands and ensure support for the widest playerbase possible.

With 113132 we have switched to the modern build as our default client and we hope you enjoy the performance enhancements of our modern toolchain. If you have any issues with the modern build you can fallback to the legacy build.

See our Happy New Year update for a reminder of the modern build details.

## TRANSLATIONS
We’ve seen an increase in the number of non-English speaking players playing our game and we want to make sure we’re giving you our full support. We have engaged with a new translation team to update and improve the existing translations, replace community translations, and add support for Japanese. We’re also updating Community Mods to allow for mod translations.

As you can imagine this is a big job so we’ll be doing it in a number of passes, focusing first on adding missing strings.

In this patch we’ve included updates for:
 - French
 - German
 - Russian
 - Simplified Chinese
 - Traditional Chinese
 - Korean
 - Japanese
 - Italian
 - Spanish
 - First pass of Polish (incomplete in 113132)

 Report issues with existing translations in this thread.

Work in progress:

 - Official translation support for mods

Also in the works are plans to add servers in South-East Asia (SEA) once we complete our migration to PAnet.

# TITANS 1V1 RANKED MID-SEASON 2 WINNERS
We’re roughly halfway through season 2, which means it’s time for mid-season prizes. Congratulations to all those who fought the good fight, blew up a whole lot of robots, and are walking away with their well deserved spoils.

**Uber #1 (US$500)**: [TNC] [Nik] NikolaMX (whew, this guy is just too good)

**Most active players (US$100 each)**

Uber

 - [TNC] [Nik] NikolaMX
 - [BSE] Diskraip
 - [ICARUS] nimzo


Platinum

 - [WAF] Viroo
 - PAG_Clopse
 - Sinoccence


Gold

 - [BSE] Qivy
 - [GPP] Isaac Arthur
 - Alive In


Silver

 - muhr
 - go
 - e1vis


Bronze

 - FrigoPorco
 - TotalAnnihilator
 - ΗΑΖΞ

Winners will be contacted shortly to arrange payment of their prize.

Now we enter the second-half of the season, and that means there’s US$1000 up for grabs for the Uber #1 spot. We’ve seen the return of some big names from the past, so we expect the battle to be hard fought. There will also be another round of most active prizes for each league. You can check out the full prize details in our season 2 announcement post.

We’re also making a few map adjustments based on feedback and game review. These are intended to improve the flow of play and your general 1v1 ranked experience.

# AI
It wouldn’t be PA if we didn’t keep improving the AI. Some of you noticed it was seeming a little under the weather recently, but we found the cause and administered treatment. Now the AI should be face rolling you once more. This includes improved air and naval attacks. You may also notice it’s more prone to bombarding you from the coast too. Ooooo, nasty.

As many of you will know, the AI’s Commander often liked to plant both feet in the soil, hold the line, and then explode in combat against forces it should never have fought. These Commanders are expensive to replace, so we’ve taught it that discretion is the better form of valour, leading to less unnecessary deaths, and it surviving to deliver the late game awesomeness we know you want.

Lastly, we did some work on enhancing the speed with which the AI processes all this information, making it more efficient than before.

# TITANS BALANCE
Air has been a continuous thorn in the side of balance, often overwhelming the defences intended to stop it due to the ability for a player to commit their full strength to every engagement. In an effort to combat this we have boosted the strength of all land anti-air, including the Commander, with the intent to allow a greater diversity of play and hopefully reduce the massive fighter blobs. No longer will your Dox fight in the shade.

The Locust has also seen a further nerf, with a reduction to health. This allows for units like the Laser Defense Tower to kill them with a single shot. They’re still devastating if undetected, but easier to stop once spotted.

The Icarus has had a minor change made to its attack behaviour so that it attacks like a gunship. Will this make it a powerful weapon of destruction? Nope. Will it make it look so much cooler before it explodes? You bet. It will also be slightly harder for Dox to hit.

# STABILITY
We, and our community testers, have spent many hours hammering away, looking for any defects so that we could reap a bountiful harvest of logs and crash dumps. These have been used to squash a number of crash root causes, including the single largest cause of server crashes.

In our modern build we have also updated Coherent UI to resolve a defect we identified which could cause client crashes.

Stability remains a big focus going forward, and an area we continue to work on. Thanks to everyone who helped us by running the PTE build.

# TL;DR
This is an update about language and you skipped it? Are you aware of irony?

 - First pass of new and improved translations
 - South East Asia (SEA) servers planned
 - Mid-season ladder prizes awarded
 - Ranked maps updated
 - Improved AI
 - Balance changes
 - Improved stability and modern Coherent UI update

# TECHNICAL NOTES
Aww yiss, this is the good stuff.

# TRANSLATIONS
New translation handling:

 - New prefix in literal strings that support knockout bindable HTML:
 - !LOCID:locId:locText
 - New data-loc-id and data-loc-no-style attributes that support knockout bindable HTML without styling:
 - `<loc data-loc-id=”locId” data-loc-no-style>locText</loc>`

# TITANS 1V1 RANKED MAP POOL UPDATES
**Aquilaris**

 - Platforms opened to amphibious and hover units

**Bulkhead**

 - Removed spawn platforms
 - Added 2 metal near the base

**Lost Temple**

 - Reduced the amount of water metal
 - Increased the starting platform size
 - Moved metal closer to the base and into tighter clusters for defence

**Riddler**

 - Increased base space by shrinking lava crevasse
 - Moved some metal points at the equator
 - Lowered the CSG around the air only metal
 - Reduced crater metal from 6 to 4

# TITANS BALANCE CHANGES
**Commander**

 - AA rate of fire increased from 1 to 2 shots per second (reducing early game air snipes)
 - Target priorities changed to equal priority for main threats:
 - Air & ( Transport | Bomber | Gunship | Titan)
 - Mobile & Air

**Spinner Vehicle Anti-Air**

 - Rate of fire increased from 2 to 3 shots per second (open up ground pushes against heavy air)
 - Target priorities changed to equal priority for main threats:
 - Air & ( Transport | Bomber | Gunship | Titan)
 - Mobile & Air

**Locust Nanoswarm**

 - Health decreased from 80 to 60 (easier to kill and will require more micro if rushed)

**Icarus Solar Drone**

 - Attack behaviour changed to aggressive circle-strafe (similar to Kestrel gunship)
 - Target priorities changed to:
 - AirDefense | ( Land & Mobile ) | ( Naval & Mobile )
 - Air
 - Fabber | EnergyStorage | MetalProduction
 - Land & Naval

**Galata Turret Anti-Air**

 - Rate of fire increased from 3 to 4 shots per second
 - Target priorities changed to equal priority for main threats:
 - Air & ( Transport | Bomber | Gunship | Titan )
 - Mobile & Air

**Bot / Vehicle / Air / Naval Advanced Factories**

 - Cost increased from 4,500 to 4,800 (slowing the T2 rush)

# CLIENT IMPROVEMENTS

 - Increased maximum eco modifier to 10x
 - Improved sandbox mode no longer requires a mod to show user interface for units, vision and control (will also be obvious if you join a sandbox game)
 - Improved stability when marshalling data between Coherent UI and engine
 - Improved performance and stability of pushing unit specs when starting live game
 - Modern: updated to Coherent UI 2.5.9.3 which may improve rendering on Linux

# CLIENT FIXES

 - Fixed missing languages in Steam client
 - Fixed initial language not being set based on Steam client language setting
 - Fixed commander selection in 1v1 ranked new game lobby
 - Fixed a material library threading crash
 - Fixed windows crash handler failing triggering a Window Error Report (WER) which was also masking the material library crash
 - Modern: updated to Coherent UI 2.5.9.3 with fix for memory allocation crash
 - Modern: updated libcurl with fix for login failures on Windows 7 (113132)
 - Fixed a client crash during live game that was impacting high spec high core systems (113132)

# SERVER FIXES

 - Fixed our #1 server crash. We now know this was caused by creative use of multiple anti-entity target weapons in the Legion Expansion Rampart shield generator when encoding deltas for the ammo capacity history curve
 - Fixed a crash if a seeking projectile was fired at a unit that as it leaves the planet
 - Fixed a navigation cost cell integrator crash in pathing

# AI IMPROVEMENTS

 - AI performance improvement pass focusing on AI data updates, build location updates and attack location selection
 - Improved the AI’s ability to use naval against land targets
 - Improved the AI’s use of space near it’s starting base on some planets
 - Improved the AI’s economy management
 - Improved the AI’s handling of slow air platoons e.g. zeus + angel
 - Small improvements to the AI’s nuke and Unit Cannon targeting
 - AI Commander should no longer charge the front lines to its death
 - AI platoons should spend less time stuck against terrain trying to attack something

# AI FIXES

 - Hardened the Fabber and Factory manager system to prevent a crash
 - Fixed a math error causing the AI to only evaluate half the planet for military targets
 - Fixed an error causing the AI to underutilize its air force
 - Fixed AI not attacking on gas giants
 - Fixed AI incorrectly marking bases as unable to deploy vehicle/naval units
 - Fixed crash if a mod enables an AI controlled Unit Cannon to build fabbers
 - Fixed AI commander getting stuck against terrain while trying to navigate back to safety (113132)
 - Fixed AI unit cannons not building anything in some circumstances (113132)
 - Fixed for AI sometimes getting stuck not using its unit cannons (113132)
 - AI building placement perf improvements (113132)

# CRASH REPORTING

 - Added –enable-full-memory-minidump (Windows only) to be used when requested by support

# MODDING

 - Work in progress: new unit specs API to replace Blueprint Info Framework

# OTHER MODERN UPDATES

 - libcurl 7.64
 - lz4 1.8.3
 - miniz 2.0.8
 - zlib 1.2.11
 - libpng 1.6.36
 - libsquish 1.15
 - stb_truetype 1.21
 - stb_image 2.21
 - breakpad
 - libsdl 2.0.9 for Windows (macOS was already 2.0.9 and Linux is system version)
 
 113044 reverts to libsdl 2.0.8 for Windows. 113046-legacy fixes missing unit selection ring.

# 113132

 - First pass of Polish translations (incomplete)
 - Fixed AI commander getting stuck against terrain while trying to navigate back to safety
 - Fixed AI unit cannons not building anything in some circumstances
 - Fixed AI sometimes getting stuck not using its unit cannons
 - AI building placement perf improvements
 - Fixed a client crash during live game that was impacting high spec high core systems
 - Modern: Fixed Windows 7 login issue
 - **Modern build is now the default client** (you can switch back to legacy if needed)