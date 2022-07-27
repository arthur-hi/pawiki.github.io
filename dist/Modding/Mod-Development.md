<h1>
    Mod Development
</h1>
<p class="text-secondary">extracts from the now archived <a href="https://wiki.palobby.com/wiki" target="_blank">wiki.palobby</a>
</p>

## Creating Your First Mod

Released mods are typically installed and downloaded automatically in-game using the Community Mods Manager

During mod development and testing local filesystem mods are to be used. 

### Mod Identifiers

Every mod must have a unique identifier.

The required format is lowercase reverse domain name notation with the prefix "``com.pa``".<br>
e.g. "``com.pa.user.mod``"

My personal preference is dashes "``-``" over underscores "``_``" for readability.

If you already have a mod released on the Community Mods Manager then you will want to use a different identifier for your development or test versions in order to avoid conflicts.<br>
e.g. "``com.pa.user.mod-dev``"

### Mod Directory Structure

Local mods for development, testing & other purposes are installed in the [Planetary Annihilation Data Directory](https://planetaryannihilation.com/support/troubleshooting/#data-directory)<br>
<span class="text-secondary">(*e.g. for Windows:* AppData/Local/Uber Entertainment/Planetary Annihilation)</span><br>based on the type of mod:

 * Client Mods: /client_mods
 * Client Mods <span class="text-secondary">(Legacy)</span>: /mods
 * Server Mods: /server_mods

Every mod must be contained in a single top level directory with a modinfo.json **[JSON](http://en.wikipedia.org/wiki/JSON)** file as documented in Mod Structure. 

<span class="text-secondary">Note: Do not add extra properties that you see in zipped mods downloaded via the community mods manager</span>

##### Client mod Example:

* [Planetary Annihilation Data Directory](https://planetaryannihilation.com/support/troubleshooting/#data-directory)
    * client_mods
        * com.pa.user.mod
            * modinfo.json
            * ui
                * mods
                    * com.pa.user.mod
                        * ***mod scripts!***

##### Server mod Example:

* [Planetary Annihilation Data Directory](https://planetaryannihilation.com/support/troubleshooting/#data-directory)
    * server_mods
        * com.pa.user.mod
            * modinfo.json
            * pa
                * unitlist.json
                * units
                    * ***modded units!***

### Testing Your Mods

Filesystem mods with a valid modinfo.json installed in the filesystem mod directories will automatically appear in the installed tab of Community Mods in PA.

If your mod does not appear check the following:

 * modinfo.json is valid JSON with all mandatory properties as documented in Mod Structure<br>(no extra properties)
 * mod directory is in the correct mod directory for its context

You can edit modinfo.json then reload file system mods to update your mod info without restating PA.

Other file changes typically require a restart of PA. 

### Submitting Your Mod

Before submitting your mod ensure that it is not outputting any errors to either the game's client or server logs.

You must create a forum post in one of these appropriate forums and link it in your modinfo file:

 * [Titans Released Mods](https://forums.uberent.com/forums/released-mods.102/)
 * [Titans Work-In-Progress Mods](https://forums.uberent.com/forums/work-in-progress-mods.103/)
 * [Classic PA Released Mods](https://forums.uberent.com/forums/released-mods.86/)
 * [Classic PA Work-In-Progress Mods](https://forums.uberent.com/forums/work-in-progress-mods.87/)

The Community Mods server requires a *direct download* url to a ***.zip*** archive of your top level directory containing your modinfo.json and mod files. <span class="text-secondary">(visual example below)</span>

A new game lobby UI client mod would be submitted as a direct download URL to:

* com.pa.user.mod***.zip***
    * modinfo.json
    * ui
        * mods
            * com.pa.user.mod
                * mod scripts!

GitHub projects are great for direct download urls and the preferred way for auto updating mods.

e.g. https://github.com/user/com.pa.user.mod*/archive/release.zip*

Although if you were to use Dropbox links they must end with dl=1 to act as a direct download. <span class="text-secondary">(please use GitHub)</span>

For new mod submissions you'll need to join the official [Planetary Annihilation Discord](https://discord.gg/pa)

Post the URL to your zip mod in the **#mod-submissions** channel and as previously mentioned it must be a direct link to the zip file.

And as always links to GitHub are preferred as then your mods will update automatically when you push changes to your repo.