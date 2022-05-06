<h1>
    Factory Spec
    <p>from Ferretmaster</p>
</h1>
Factorys in pa merged with weapons are fairly unique so have unique tags within a factory object, these are not needed for basic factorys, but are used for things like the unit cannon and nuke/anti nuke launchers
<br>
<br>
<h3>Fields</h3>
The fields are contained within an object called factory in the unit file.
<br>
<br>
- <b>store units</b> Whether this factory can store units to use for ammunition.
<br>
- <b>deploy_projectile</b> Will deploy a made unit into a standard projectile, used in orbital launcher and unit cannon
<br>
- <b>spawn_points</b> An array of bones on the model that stored/deployed units are attached to.
<br>
- <b>default_ammo</b> An unused tag or default value, probably replaced by initial_build_spec.
<br>
- <b>default_build_stance</b> Sets the build stance of a factory, usually set to continuous if specified
<br>
- <b>hide_deploy_projectile</b> If true hides the deploy projectiles icon/model until fired
<br>
- <b>hide_stored_units</b>  If true hides the stored units icon/model until fired
<br>
- <b>pass_on_orders</b> A default value that passes on orders from the factory to the built units, unit cannon has this set to false
<br>
<br>
<h3>Examples</h3>
<br>
Unit Cannon
<br>
<br>
<pre data-bs-toggle="tooltip" title="Click to select code">
json
  "factory": {
    "deploy_projectile": "/pa/units/land/unit_cannon/unit_cannon_deploy.json",
    "hide_deploy_projectile": true,
    "hide_stored_units": true,
    "pass_on_orders": false,
    "spawn_points": [
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build",
      "socket_build"
    ],
    "store_units": true
  },
</pre>
<br>
Nuke Launcher
<br>
<br>
<pre data-bs-toggle="tooltip" title="Click to select code">
json
   "factory": {
    "store_units": true,
    "spawn_points": [
      "bone_missile01"
    ],
    "initial_build_spec": "/pa/units/land/nuke_launcher/nuke_launcher_ammo.json",
    "default_build_stance": "Continuous"
  },
</pre>
<br>
<h3>Notes</h3>
For a unit to be launchable by the unit cannon or similar units it needs to be transportable and have an attach point.