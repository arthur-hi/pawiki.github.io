# HAPPY NEW YEAR UPDATES
Dec 31, 2018 - Apr 2, 2019

<img src="https://cdn.planetaryannihilation.com/wp-content/uploads/2019/01/112595-1024x640.png">

Happy New Year Commanders,

Our faster modern toolchain server build with multi-threading is now live on official servers! This should mean the servers perform better than ever before, especially on multi-planet systems.

The modern client with local server remain opt-in via the modern BETA in Steam and the PA launcher. If you are playing single player with a local server or hosting LAN games we encourage you try the modern client.

To help new players pick up the game faster, the Planetary Annihilation guides section is now a one-stop shop for everything you wanted to know about Planetary Annihilation but didn’t know to ask.

We have expanded the TITANS 1v1 ranked map pool with four community maps from WPMarshall and GrandHomie (for a total of 15 maps):

 - Enfer (GrandHomie)
 - The Marne (GrandHomie)
 - Lugaan (WPMarshall)
 - Singe (WPMarshall)

Your complaints about dodging in ranked have also been heard. Not only have we removed ranked queue status information from Community Chat, we’ve also anonymised names in the ranked lobby and removed the ability to leave the lobby. You really are trapped in there with your opponent now, so don’t queue if you don’t intend to play.

We’ve also got AI upgrades for the single-player and comp stomp crowd. The neural network’s fitness function (it sounds technical which means it’s impressive) has been reworked so that the AI is smarter about the way it evaluates battles.

Another long-standing AI request was the ability to select which Commander the AI uses. We promised to add this and so we have. Please feel free to admire the new Commander selection UI, making better use of your screen real estate.

We’ve continued to keep an eye on crash reports and have put a lot of effort into eliminating everything we can. You should find Planetary Annihilation an even more stable experience than before. We’ll continue to keep an eye on things to see what else might crawl out of the woodwork. Some of these things can be pretty edgecase, but we won’t stop in trying to track them all down, we hate crashes even more than you do.

Audio modding has arrived, so modders can now add whatever sounds they like to the game, either overwriting existing sounds or even adding completely new ones. Give your new unit its own style as it threatens doom to its enemies. Break subwoofers everywhere with extra bass in every shot sound effect. Replace the in-game VO with your own voice so you can literally congratulate yourself on your wins, you egotistical monster. We look forward to seeing what you come up with.

As a final thanks for continuing to play Planetary Annihilation TITANS we have added two NEW dedicated servers running the latest modern linux builds that can handle epic games of up to 32 players. A number of trusted community members have been given the keys, so keep an eye out in Community Chat and the official Planetary Annihilation Discord for announcements of big games. You haven’t truly won a game of Planetary Annihilation until you stand victorious on the wreckage of 31 other Commanders.

## TL;DR
 - Official servers using modern toolchain builds with multi-threading
 - Two clients available (stable legacy and cutting-edge modern for testing)
 - 1v1 ranked maps expanded with four community maps from WPMarshall and GrandHomie for a total of 15 maps
 - 1v1 ranked lobby is now anonymous showing Player 1 and Player 2
 - 1v1 ranked lobby leave option has been removed
 - AI improvements with reworked and retrained neural networks
 - AI commander selection (as promised)
 - Server crash fixes
 - NEW official guides: https://planetaryannihilation.com/guides/
 - NEW audio modding
 - NEW official dedicated servers with up to 32 players for big games

## TITANS BALANCE CHANGES
 - Pelican cost increased to 160 and health decreased to 150
 - Locust cost increased to 260
 - Spinner range increased to 120

## TECHNICAL NOTES
Next year we will be moving to PAnet, which will replace the legacy UberNet infrastructure with modern server environments. Eventually all the legacy Windows servers will be replaced with faster modern Linux servers.

## TOOLCHAINS
Software development toolchain: https://en.wikipedia.org/wiki/Toolchain

**Legacy toolchain**

Visual Studio 2012 / Windows 8 SDK
Xcode 5.0.1 / macOS Mountain Lion for macOS Lion 10.7+
Legacy Steam Linux runtime / GCC 4.8.4

**Modern toolchain**

Visual Studio 2017 latest / Windows 10 SDK latest
Xcode 10.1 / macOS 10.14.1 latest for macOS Mavericks 10.9+
Modern Steam Linux runtime / GCC 5.4.1 (currently limited by Steam Linux runtime)
Native Linux / Clang / LLVM 7.x for dedicated Linux servers

## SERVER IMPROVEMENTS
 - Faster modern toolchain build

## AI IMPROVEMENTS
 - Completely reworked the AI’s neural network fitness function to improve how the AI evaluates the outcome of a battle
 - Instead of being based on the difference between each and every input before and after the encounter, the fitness function now primarily looks at which side lost more metal value. Not every encounter results in a metal loss, so the fitness function also compares unit count losses as well as health losses, but they don’t count nearly as much as metal losses
 - AI commander selection in new game lobby

## SERVER FIXES
- Fix for crash if the AI was trying to teleport a fabber or commander to a planet as the planet was destroyed
- Fix for multiple cases where a unit could be removed from a platoon (dropping the reference) before being added to a new platoon, causing a crash later on in the game
- Fix for crash if the commander did not have an Uber cannon spec
- Fix for build arms not ticking in multi-threading enabled servers causing fabbers/commanders to not face their build targets
- Fix for crash if a fabber/commander was assisting in the construction of a projectile that died
- Fix for a crash if a projectile target died and was cleaned up by the sim
- Improved fix for players disconnecting from new game lobby not being removed from game

## CLIENT IMPROVEMENTS
Reorganised start menu is now scrollable with more space for menu items
Improved commander and colour selection in new game lobby

## CLIENT FIXES
Fix for ESC key locking up the start menu if no video was playing
Fix for community videos not showing if community mods not enabled

## MODDING
NEW audio modding:
api.sound.playSoundFromFile(path)
api.sound.playSoundFromFileAtLocation(path, x, y, z)
api.sound.registerCueMod(cue, path)
api.sound.unregisterCueMod(cue)
NEW build.txt with original build number (will differ from version.txt for legacy clients)
NEW gBuild global with original build number from build.txt accessible in all scenes
NEW –version command line option to override version.txt for targeting a different server build

## 112595
Hot fix for 1v1 ranked