<h1>
    Factory Spec
    <p>by Ferret-Master<br>from <a href="https://github.com/Ferret-Master/Planetary-Annihilation-Modding-Documentation" target="_blank">GitHub</a></p>
</h1>

Factorys in pa merged with weapons are fairly unique so have unique tags within a factory object, these are not needed for basic factorys, but are used for things like the unit cannon and nuke/anti nuke launchers


## Fields

The fields are contained within an object called factory in the unit file.


- **store units** Whether this factory can store units to use for ammunition.

- **deploy_projectile** Will deploy a made unit into a standard projectile, used in orbital launcher and unit cannon

- **spawn_points** An array of bones on the model that stored/deployed units are attached to.

- **default_ammo** An unused tag or default value, probably replaced by initial_build_spec.

- **default_build_stance** Sets the build stance of a factory, usually set to continuous if specified

- **hide_deploy_projectile** If true hides the deploy projectiles icon/model until fired

- **hide_stored_units**  If true hides the stored units icon/model until fired

- **pass_on_orders** A default value that passes on orders from the factory to the built units, unit cannon has this set to false

### Examples

Unit Cannon
```json
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
```
Nuke Launcher
```json
   "factory": {
    "store_units": true,
    "spawn_points": [
      "bone_missile01"
    ],
    "initial_build_spec": "/pa/units/land/nuke_launcher/nuke_launcher_ammo.json",
    "default_build_stance": "Continuous"
  },
```

### Notes
For a unit to be launchable by the unit cannon or similar units it needs to be transportable and have an attach point.
