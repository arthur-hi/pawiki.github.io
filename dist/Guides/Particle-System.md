<h1>
    Particle System
    <p>Author: Ben Golus~ Uber Dev<br>
    Updated: dom314, mikeyh
    </p>
</h1>

Particle systems in Planetary Annihilation are defined with JSON formatted files with the extension "**.pfx**".<br>
This document lists the JSON keys and their data format type along with brief explanations of their use.

For comments or questions, please use the [Planetary Annihilation Forums](https://forums.planetaryannihilation.com/threads/particle-system-guide.67428/ )

### Basic particle system example
```
{
  "emitters": [
    {
      "spec": {
        "shader": "particle_add",
        "alpha": [[0.0, 1.0], [1.0, 0.0]],
        "baseTexture": "/pa/effects/textures/particles/dot.papa"
      },
      "velocityRangeX": 0.5,
      "velocityRangeY": 0.5,
      "velocityZ": 1.0,
      "velocity": 10,
      "gravity": -9.8,
      "sizeX": 3,
      "emissionRate": 15,
      "lifetime": 1.0,
      "emitterLifetime": 3.5,
      "bLoop": false
    }
  ]
}
```
Particle systems are made up of 3 major sections.<br>
The particle system itself, the particle emitters, and each emitter’s particle spec.<br>
The example above includes some notes about where those three section begin and end along with the emitter array.<br>
The below glossary breaks down the keys into those three sections.

### JSON
All particle systems are written in **[JSON](http://en.wikipedia.org/wiki/JSON)**, which is an open data notation format.<br>
If you’re familiar with JSON notation you should be familiar with the layout of the **.pfx** file.<br>
In the document below some of the data types are listed in their JSON format, and others are listed by how the data is parsed (though still made up of JSON data types).<br>
For those unfamiliar with JSON you can see the example above is not too complex, but it’s important to keep track of the use of brackets ``[]`` and braces ``{}`` and take care to not have what are called trailing commas.<br>
For every bracket or brace there must be an open and a closed pair or the file will not parse and you’ll get an error in the log. Same is true for quotes.<br>
If you have a trailing comma, which is a comma at the end of a list of things inside of brackets or braces, it will also fail to parse and you’ll get an error in the log.<br>
An example of a trailing comma would be having a comma after the “bLoop”: false line.

## Golassary
```
// Particle System
{
    "emitters": [{
        "spec" : {<particle properties>},
        <emitter properties>
    }],
    "color": <global color multiplier>
}
```

### Particle System

The group of particle emitters.

Key Name | Value Type (default) & Description
:-:|-
```emitters``` | array(```[]```)<br>The list of emitter objects in the system.
```color``` | color (```[1.0, 1.0, 1.0, 1.0]```)<br>A system wide color multiplier. Value is RGBA linear float color values in a JSON array.

### Emitter System

Defines the position and movement behavior of particles. 

Key Name | Value Type (default) & Description
:-:|-
```spec``` | object (```{}```)<br>The particle spec definition.
```type``` | string (```"POSITION"```)<br>Defines the shape of the particle spawn positions, and how the ```offset*``` keys are interpreted.<br>Valid types are ```"POSITION"```, ```"SPHEROID"```, ```"SHELL"```, ```"EMITTER"```, ```"CYLINDER_X"```, ```"CYLINDER_Y"```, and ```"CYLINDER_Z"```
```linkIndex``` | number (```-1.0```)<br>Used when the type is set to ```"EMITTER"``` to define the emitter to attach to.
```offsetX```<br>```offsetY```<br>```offsetZ```| emitter time curve (```0.0```)<br>Define the starting spawn position for the particles in emitter space. The shape of the emitter space depends on the ```type``` field. 
```offsetRangeX```<br>```offsetRangeY```<br>```offsetRangeZ``` | **emitter time curve** (``0.0``) - Define the starting spawn position range +/- the start position in emitter space.
```offsetAllowNegZ``` | bool (```true```)<br>Allow particles to spawn with an initial positiong with a negative Z in emitter space, otherwise flip Z to a positive position.<br>Useful for explosions on the ground so that particles travel only up. 
```velocityX```<br>```velocityY```<br>```velocityZ```| emitter time curve (```0.0```)<br>Initial velocity direction in emitter space.<br>This is for indicating direction only, so if you increase any of these the actual speed of the particle will not change, only the direction.
```velocityRangeX```<br>```velocityRangeY```<br>```velocityRangeZ``` | emitter time curve (```0.0```)<br>Initial velocity direction range in which a particle can randomly deviate from velocityX, velocityY, and velocityZ. 
```useRadialVelocityDir``` | **bool** (``false``) - Use the starting location as a normalized vector in addition to the velocity direction values.<br>***See below.***
```useShapeVelocityDir``` | **bool** (``false``) - Use the starting position on the shape from the emitter’s type in addition to the velocity direction values.<br>***See below.***
```velocity``` | **emitter time curve** (``1.0``) - Initial particle velocity along velocity dir at spawn.<br>***See below.***
```velocityRange``` | **emitter time curve** (``0.0``) - Initial particle velocity range +/- velocity.<br>***See below.***
```inheritedVelocity``` | **emitter time curve** (``0.0``) - Add the system’s velocity multiplied by this value to the initial particle velocity.
```gravity``` | **emitter time curve** (``0.0``) - Particle gravity over the emitter lifetime.<br>Always in world space towards the center of the planet.<br>Affects all particles in the emitter.<br>Value is in world units per second with negative numbers going towards the planet center.
```accelX```<br>```accelY```<br>```accelZ``` | **emitter time curve** (``0.0``) - Particle acceleration over the emitter lifetime in emitter space.<br>Affects all particles in the emitter.<br>These values are absolute acceleration values and not normalized like velocity.<br>(May have odd results with world space particles.)
```drag``` | **emitter time curve** (``0.0``) - Particle velocity multiplier over the emitter lifetime.<br>Affects all particles in the emitter.<br>Note: a drag of ``1.0`` is no drag, a drag of ``0.0`` turns drag off which is the same thing.<br>A real drag of ``0.0`` would disable all movement.<br>Drag values greater than  ``1.0`` will cause particles to accelerate.<br>***See below.***
```sizeX```<br>```sizeY``` | **emitter time curve** (``1.0``) - Defines the particle size in world units.
```sizeRangeX```<br>```sizeRangeY``` | **emitter time curve** (``0.0``) - Defines the particle size range in world units.
```sizeRandomFlip```<br>```sizeRandomFlipX```<br>```sizeRandomFlipY``` | **bool** (``false``) - Defines if the particle’s size can be negated on one or both axis.<br>The result is it randomly chooses how the texture is flipped on particle spawn.<br>Helps randomize the appearance of a particle especially if the texture used has a strong pattern.
```sizeSquareAspect``` | **bool** (``false``) - Force particles to be square.<br>Defaults to true if no sizeY is defined.
```sizeConstantAspect``` | **bool** (``false``) - Force particles to have a constant sizeX:sizeY ratio when using sizeRangeX.<br>Defaults to true if no sizeRangeY is defined.
```rotation``` | **emitter time curve** (``0.0``) - Defines the initial particle rotation orientation.<br>Value is in radians (about 6.2832 is one full rotation).
```rotationRange``` | **emitter time curve** (``0.0``) - Defines the initial particle rotation orientation range, +/- the initial rotation.<br>Value is in radians (about 3.1416 encompasses the entire possible rotation range).
```rotationRate``` | **emitter time curve** (``0.0``) - Defines the particle rotation rate on spawned.<br>Value is in radians per second (about 6.2832 will cause a particle to rotate one full rotation over a second).
```rotationRateRange``` | **emitter time curve** (``0.0``) - Defines the particle rotation rate range on spawn +/- the rotationRate.<br>Value is in radians per second.
```snapToSurface``` | **bool** (``false``) - Option to snap particle’s spawn position to the ground mesh surface.<br>Takes the offset location and traces towards the center of the planet.<br>If particle offset is underground will snap to the surface.<br>Will always snap to the highest point on the land.<br>Does not test against units, only the planet surface mesh.<br>**THIS IS EXPENSIVE, USE ONLY WHEN NEEDED!**<br>***See below.***
```snapToSurfaceOffset``` | **emitter time curve** (``0.0``) - Particle spawn distance from the ground surface when using snapToSurface.<br>Is always in a direction away from the planet center, not the surface normal.
```alignVelocityToSurface``` | **bool** (``false``) - Align velocity directions when using snapToSurface to make Z up from the planet center and -Y away from the emitter along the ground (specifically perpendicular from the direction to the planet center).
```red```<br>```green```<br>```blue```<br>```alpha``` | **emitter time curve** (``1.0``) - Particle initial color multiplier in linear float color.<br>Set at the time of each particle’s spawn.<br>***See below.***
```rgb``` | **emitter time rgb curve** (``[0.0, 1.0, [255, 255, 255]]``) - Particle initial color multiplier in sRGB binary color form with a brightness.<br>***See below.***
```useArmyColor``` | **number** (``0``) - Use the system color multiplier (``0``), the primary team color (``1``), or secondary team color (``2``) for this emitter.
```rampV``` | **emitter time curve** (``0.0``) - Defines the initial V of the UV of the ramp texture in particle shaders that use it.<br>Otherwise used in string particles to define texture repeat distance in world units.<br>***See below.***
```rampRangeV``` | **emitter time curve** (``0.0``) - Defines the initial V range of the UV of the ramp texture +/- the rampV in particle shaders that use it.<br>Otherwise used in string particles to define the texture repeat distance +/- the rampV in world units.<br>***See below.***
```rampOffsetV``` | **bool** (``false``) - Randomly offset the texture on string particles.<br>***See below.***
```lifetime``` | **emitter time curve** (``1.0``) - Defines initial particle lifetime in seconds.
```lifetimeRange``` | **emitter time curve** (``0.0``) - Defines initial particle lifetime range +/- the particle lifetime.
```emitterLifetime``` | **number** (``1.0``) - Defines the emitter lifetime in seconds.<br>This the length of time a looping emitter will repeat or how long a non-looping emitter will live before ceasing to emit particles.<br>Particles will finish out their own lifetime after the emitterLifetime ends or a looping particle emitter is turned off.
```delay``` | **number** (``0.0``) - Defines a delay in seconds before an emitter lifetime begins the first time.<br>Note: if all of a particle system’s emitters are delayed the particle system may shut down before anything spawns.
```delayRange``` | **number** (``0.0``) - Defines a delay range in seconds +/- the delay before an emitter lifetime begins the first time.
```bLoop``` | **bool** (``true``) - Defines if an emitter should loop or happen only once.
```loopCount``` | **number** (``0``) - Defines how many times an emitter should loop before ending if bLoop is true. A value of ``0`` loops indefinitely, a value of ``1`` has the same behavior as bLoop set to false.
```startLoop``` | **number** (``0.0``) - The emitter time in seconds at which each loop of the emitter should restart the lifetime at. Note: can be a negative value.
```endLoop``` | **number** (``0.0``) - The emitter time in seconds at which each loop of the emitter should end before restarting the lifetime. A value of 0.0, a negative value, or a value greater than the emitterLifetime will use the emitterLifetime instead.
```startDistance``` | **number** (``0.0``) - Disables emitter if camera is closer than this distance.
```endDistance``` | **number** (``1.0``) - Disables emitter if camera is further than this distance.
```useWorldSpace``` | **bool** (false) - Use world space instead of emitter space for particle position updates. Allows particles to be “left behind” on a moving emitter.
```useArcLengthSpace``` | **bool** (``false``) - Transform particle positions into arc length space. Effectively wraps positions around the planet surface.<br>***See below***.
```interpolateSpawn``` | **bool** (``true``) - Interpolate the position of world space particles on moving particle systems.<br>Spreads the particles across the current and previous particle system positions to keep smooth position distributions.
```killOnDeactivate``` | **bool** (``false``) - Immediately remove all particles in the emitter if the particle system is disabled.<br>Mainly used on looping effects in the game.<br>Does not kill particles when the emitter lifetime ends.
```emissionBursts``` | **bursts** (``0``) - Define bursts of particles over the emitter’s lifetime. See ***below*** for more explanation.
```emissionRate``` | **emitter time curve** (``20.0``) - Define the number of particles per second to spawn.<br>Defaults to ``0.0`` if **emissionBursts** is defined.
```maxParticles``` | **number** - Max number of live particles allowed in the emitter at one time. This is not a running total, but a current living count limit.<br>If left undefined it is generally “smart”; it tries to determine the max number based on emit rate and particle lifetime.

### Particle Spec

defines how particles are displayed.

Key Name | Value Type (default) & Description
:-:|-
```shader``` | **string** (``particle_add``) - Defines the shader effect used to draw the particle.<br>***See below***.

### Number

Numbers in the particle system can be written as floats (``1.0`` or ``1.00`` or ``1.0000000`` etc.) or whole integers (``1``) in any place they’re used.<br>Internally these will get turned into the format they’re needed regardless of how they’re written.<br>In the above glossary some numbers show their default values as either a float or integer to give you an idea of how they’re used internally but feel free to write the numbers however you wish.

### Bool 

A boolean, or “bool” for short, are simple ``true`` / ``false`` values. They should be written in the file just like the very first example system without quotes. If you write ``“false”`` with the quotes that will actually get parsed as ``true``, so be careful!

### String 

Strings are just basic text with quotes around them. Their use is different in every case, so this document will try to explain those cases in more detail. Most uses are not case sensitive, but be warned that any that refer to files, like the baseTexture key, are not case sensitive on Windows, but are on Linux and OSX!

### Curve 

Curves are used in many places in particle systems and are used to animate a value over time. There are two major types of curves in particles, emitter time and particle time, and their use and exact behavior differs slightly.

<br>

## Curve Time Types

#### Emitter Time Curve<br>
**Emitter time curves** are in “real time”.<br>
The time values matching to the current emitter lifetime.<br>
If an emitter with a lifetime of ``10`` has been playing for ``5`` seconds it’ll match up with time value of ``5``.<br>
For looping emitters the time value match the looped time and not the absolute time the emitter has been alive.

#### Particle Time Curve<br>
Particle time curves are in normalized particle lifetime.<br>
This means that particles with a lifetime of ``10`` that have been around for ``5`` seconds will match with a time value of ``0.5`` and not ``5``.<br>
Particle time curves will always go from time values ``0.0`` to ``1.0``, any times outside of that range will never be reached.

#### Defining curves<br>
Curves can be defined in a couple of different ways.<br>
There are shorthand and long versions of curves that can be used to define them based on the use case.

<br>

Example | Form
```"alpha": 1.0``` | shorthand
```"alpha": [[0.0, 1.0]]``` | basic
```"alpha": {"keys": [[0.0, 1.0]], "stepped": false}``` | complete

<br>

All three of these examples result in the exact same curve, a single key with a value of ``1.0``.<br>
If all you need is a single value that never changes, just using the shorthand of a single number is the easiest way to define the value for that curve.

In that example for the basic and complete forms are kind of useless in the way they’re written.<br>
As stated, they’re identical to the single value of ``1.0`` all the time.<br>however you can see there is a set of two numbers inside of brackets, These are the curve’s keys.

The first number value is the key’s time, and the second value is the value the curve outputs at that time.<br>
If we add more keys the curve will output linearly interpolated values of the two keys around it or the closest key if it’s not between two.<br>
If we want a curve with multiple keys with can just expand the examples.

<br>

Key Name | Example
basic | ```"alpha": [[0.0, 1.0], [1.0, 0.0]]```
complete | ```"alpha": {"keys": [[0.0, 1.0], [1.0, 0.0]], "stepped": false}```

<br>

These two are identical to each other.<br>
They interpolate from a value of ``1.0`` at time ``0.0`` to a value of ``0.0`` at time ``1.0``. If you were to use these in the particle spec it would cause the particle to fade out over its lifetime.<br>
You can just keep adding more keys to the curve by adding more number pairs.<br>
You don’t even need to define the keys at time ``0.0`` or ``1.0`` if you don’t want.

<br>

Key Name | Example
basic | ```“alpha”: [[0.25, 0], [0.5, 5.2], [0.7111, -1]]```

<br>

Now we have ``3`` keys which the system will try to interpolate between. Though, to be honest they’re not very useful values for the key we have them on in the example … so let’s move on.
 
Okay, so what’s the deal with the complete notation? Well it lets us use that **“stepped”** key. That changes the way curves are evaluated from interpolating between keys and instead instantly simply snaps from one key’s value to the next when it reaches that key’s time.

<br>

## The “See Below” Section
This is the section that includes all of those pesky **“see below”** notes in the glossary.

### Spec
All of those pesky **“see below”** notes except the one for spec! Go back up to the glossary and look at Particle Spec!
 
Okay so there’s more info here too.
 
Every emitter has its own particle spec that defines properties about the look of the particle.<br>
See the basic particle system example for how the **“spec”** is broken out of the emitter.

### Emitters
Every particle system has a list of emitters.<br>
They include the particle spec that defines the basic look of a particle as well as the movement behaviors for those particles.<br>
In the particle system object, that area between the first and last braces ``{}`` there’s an emitter key with a bracket pair ``[]`` with one or several comma separated pairs of braces ``{}``.<br>
Each of those sets of braces inside the brackets are the emitters.

```
{
  "emitters": [     
    {
      "spec": {
      }
    },
    {
      "spec": {
      }
    },
    {
      "spec": {
      }
    }
  ]
}
```
This is an example of a system with three default particle systems. This should work in game, though it’ll be really boring.

### Ranges
There are a number of keys that have matching **“Ranges”** keys.<br>
Before we get further I’m going to quickly explain them.<br>
Ranges are used to give some randomness to the values you define in their **“parent”** key.<br>
The math for them works out like this:
```
value + (valueRange * random) 
```
where random is a float between ``-1.0`` and ``1.0``
 
That random being between negative and positive one is why many of the descriptions for the ranges mention them being +/- the parent key.

#### Offsets & Particle Emitter Type
The type key is used to change the shape of the emitter. Specifically this controls how the initial position of a particle is calculated and what the behavior of the offset and offsetRange keys are.

#### Position
This is the default emitter shape type, it’s basically a box. You can think of the offset values as moving the center of the box, and the offsetRange values being half of a box’s width (X), length (Y), and height (Z). Particles can spawn anywhere inside the box.
It can also be used to spawn particles from a single point (by not using the offsetRange values), or along an axis aligned line or plane (by using one or two offsetRange values).

#### Spheroid
This is the spheroid volume shape. Like the box offset values move the position of the sphere and offsetRange values being a sphere’s radius width (X), length (Y), and height (Z). It’s basically the spheroid shape that would fit inside the box created with the default type. Particles can spawn anywhere inside the spheroid.

#### Shell
This is similar to the spheroid and the offset values mean the same thing, but instead particles can only spawn on the surface of the spheroid.

#### Cylinder
The three cylinder types, CYLINDER_X, CYLINDER_Y, and CYLINDER_Z are all very similar to each other, but they differ from the other types in that they use the offset values a bit differently. The axis listed in the type is the axis the cylinder is around, and the offsets for that axis are just like the other types. The other two offset values define the radius of the cylinder and the cylinder’s wall thickness.

If that’s confusing I’ll give an example for the CYLINDER_Z specifically.
```
"type": "CYLINDER_Z", 
"offsetX": 5,
"offsetY": 5,
"offsetZ": 5,
"offsetRangeX": 1,
"offsetRangeY": 1,
"offsetRangeZ": 5
```
 
That example gives a 12 unit wide cylinder with 2 unit thick walls (radius of 5 units +/- 1 unit) that is 10 units tall sitting on the floor (offset 5 units +/- 5 units).

#### Box
The box shape behaves like the cylinder counterparts, except that they are box shaped. The offsetX, offsetY, offsetZ control the size of the box. This particles will spawn on each of the box’s surfaces except for along the axis of the hole. The offsetRange keys control the thickness of the particle spawn area along the surface of the box.

#### Mesh
The mesh type makes particles spawn along the surface of a mesh. TODO: More details

#### Emitter & linkIndex
This is the most complex offset, not because of what the offset values do, because they’re actually the same as the default type, but because of linkIndex and the extended behavior it has on particle counts.

The particle emitter EMITTER shape type uses the position of the particles of another emitter in the same particle system to determine the spawn position of its particles. The linkIndex is the index of the emitter in the particle system’s emitter array. You’ll notice in my multiple emitters example above I list out a number for each of them. So the position of the particles that spawn is the position of a particle from that other emitter, plus the offset values, +/- the offsetRange.

There’s an additional behavior that the number of particles spawned is the emissionRate of this emitter multiplied by the particle count of the linked emitter, so be careful with particle counts.

<br>

### Advanced Particle Offsets
Beyond the basic emitter types there are some additional values that let you control the initial location of particles.

#### Allow Negative Z
The offsetAllowNegZ key exists because a lot of effects take place on the ground. Often times you’ll have an effect that is spawned on the ground that you want to have a dome shape (like an explosion). The spheroid and shell types mean half of the particles are underground, wasting a lot of particles. The offsetAllowNegZ solves this by taking any particle that spawn on the negative Z side of a shape and flips it to the positive side. In the spheroid case it means it’s like a ball cut in half, like a dome.

#### Snap to Surface
This is an extremely useful tool for very large effects. It’s generally not advised for smaller effects because it’s very, very expensive. What it does however is it takes the position calculated by the initial offset shape and snaps it to the ground. This is taking the particle’s initial position and tracing a line from it to the center of the planet and placing it on the ground surface it finds. If there are overlapped ground places (like a bridge) it will always choose the highest point. If the particle starts underground it’ll snap it back to the surface. Because it is so expensive this only happens on particle spawn. Any velocity after that can send it through or away from the ground surface.

The snapToSurfaceOffset key is used to then offset that snapped position away from the ground so that particles are not just sitting embedded in the ground. The direction is away from the planet center, not the surface’s angle.

We’ll discuss alignVelocityToSurface in the velocity and movement section.

#### Arc Length Space
This one is a little hard to explain, but roughly it takes the initial position of the particles and wraps them around the planet. Unlike snap to surface it’s much cheaper to calculate, but like snap to surface it’s only really useful on very large effects. I actually use both useArcLengthSpace and snapToSurface in the same emitter frequently.

The best way I can think of to explain this is if you had a foam cube and pinched the bottom four corners into a point, that’s kind of what I’m doing. Alternatively you could think of it as wrapping a blanket around a ball. The edges of the blanket kind of bunch up, and might even overlap if it’s too much bigger than the ball, but it works okay.

<br>

### Particle Velocity & Movement
Particle velocity is has two separate stages. There’s the initial velocity that each particle has when it is spawned, and there are ongoing effects like gravity or drag. This will go into each of these separately.

#### Initial Velocity
The starting velocity for particles are determined by a combination of a normalized velocity direction and a velocity magnitude. The numbers used in the velocity direction have no effect on the speed of particles, only their direction. The exception to this is if a particle has no direction then the speed is zero.

The velocity and velocityRange keys determine the speed of particles. No other values changes the actual initial speed. Want your particles to go faster, increase the velocity value, it’s that easy! The velocityRange, like other ranges, adds some randomness to the velocity. If the velocityRange is larger than the velocity expect some particles to shoot out in the opposite direction from the one you expect.

The velocityX, velocityY, velocityZ and the accompanying velocityRangeX/Y/Z keys are used to set the velocity direction. The values of the velocityX/Y/Z direction keys are used to generate a normalized vector which is multiplied by the velocity speed. This means a velocityZ of 1, or 100 will cause particles to go up at the speed set by the velocity key. A velocityZ of 1 and a velocityRangeX of 1 will cause the particles to spawn traveling in an fan shaped arc. A velocityZ of 5 and a velocityX of 5 will cause particles to spawn traveling in a straight line up and to the side at a 45 degree angle. You can combine these to get many different directions.

The useRadialVelocityDir key adds additional control by taking the particle’s initial position into account when determining the velocity direction. Like the velocityX/Y/Z values, the actual position does not change the speed, only the direction. The normalized direction from the emitter to the particle is added to the defined velocityX/Y/Z direction values, and those are then normalized again to be just a direction.

The useShapeVelocityDir key is similar to the useRadialVelocityDir, but the offset values have no effect on the resulting direction. For example if you use the SPHEROID type and use an offsetRangeX and Y of 10 and offsetRangeZ of 0 particles will spawn in a flat cylinder. With useRadialVelocityDir particles will move in a cylindrical direction as there’s no Z offset to get a direction from. With useShapeVelocityDir particles will still emit in all directions..
            
Here’s an example why you’d want to use radial velocity with velocity directions:

Let’s say you have a particle system that you want to just spray in all directions.<br>
That’s pretty easy. Just set the ``velocityRangeX``/``Y``/``Z`` keys all to a value of ``1``.<br>
That’ll mean there’s a roughly even chance of particles going in all directions.<br>
It ends up creating kind of a sphere of particles.

Now use the shell offset to make it start in a sphere shape with a radius of ``1``.<br>
You might expect it to look pretty similar to how it did before, and it kind of does, but the center of the effect gets kind of messy.<br>
This is because particles are still going in all directions regardless of where they start, so a particle on the far left might go right, going through the center of the shell.<br>
It just looks like noise rather than a nice sphere emitting particles outward.<br>
If we remove the ``velocityRangeX``/``Y``/``Z`` keys and set ``useRadialVelocityDir`` to ``true`` it looks more like it did before we added the offset.<br>
The particle’s position on the sphere is determining the direction so they are consistent with the shape they’re emitting from.

Now if we add a little bit of the ``velocityRangeX``/``Y``/``Z`` back in, say all set to ``0.1``, we can add a little bit of that randomness without completely removing the sphere direction.<br>
If we set ``velocityZ`` to ``1`` particles on the very bottom of the sphere will now basically radiate outward and the overall direction of particles will tend towards going up.<br>
Increasing ``velocityZ`` to ``10`` will almost completely negate the effect the particles’ position has on their direction with all of the particles moving almost straight up, though there will still be a slight tendency to radiate outward.

Throughout all of this particles will continue moving at the same speed, just different directions.

#### Ongoing Velocity
After particles are initially spawned they will continue to move at the same speed and direction for their entire lifetime unless acted on by another force.<br>
Those forces are gravity, drag, and directional acceleration.

Gravity works by pulling a particle towards the center of the planet, or pushing it away.

Directional acceleration, ``accelX``/``Y``/``Z``, adds velocity to the particle in emitter space directions.<br>
Unlike the velocity keys these are absolutes; an accelX of ``5.0`` will increase the velocity of particles by ``5`` units per second in the ``+x`` emitter axis.

Drag acts as a multiplier to the velocity, generally used to slow the particle down over time, but values greater than one can make the particle speed up to.<br>
Generally useful drag numbers are very close to ``1.0``, maybe no lower than ``0.8``.<br>
A value of ``0.9`` will bring a particle travelling at ``10`` units per second to nearly a halt in about a second and a half.<br>
Because this is a multiplier particles will never fully stop though at very small drag values it may appear as though it has.

For those who are curious, the formula used for drag in game is roughly equivalent to:
```
currentVelocity *= drag ^ (60 * time); 
```

To slow down a particle’s initial velocity by 50% after 1 second the drag value works out to 0.98851. That will also slow to 1% of the initial velocity after 6.642 seconds.

<br>

### Emission Bursts & Emission Rate
Emission rate and bursts control the spawning of new particles over the emitter lifetime. Bursts allow for a specific number of particles to spawn at one time in a reliable way, where the rate lets you spawn particles at a constant flow. Emission rate is fairly straightforward, it’s simply the number of particles to spawn per second, so a rate of 20.0 will spawn 20 particles every second. The emissionRate key is a curve so you can change the rate over time, like a faucet slowly turning off or on.

Emission bursts are even easier to think about, but because they have a couple of different use cases there’s a couple of different forms to them. Just like curves they have a shorthand, basic, and complete form.

Example | Form
```"emissionBursts": 10``` | shorthand
```"emissionBursts": [[0.0, 10, 0, 1.0]],``` | basic
```"emissionBursts": [{"time": 0.0, "count": 10, "countRange": 0, "chance": 1.0}]``` | complete

Okay, shorthand probably looks familiar.<br>
It’s a number just like lots of things, but in this case it means emit ``10`` particles at a time of zero.<br>
The basic form is like the basic form for curves, but has two extra optional numbers for additional properties.<br>
These are in the same order as the complete form.
 * **"time"**: time is the emitter lifetime at which to do the burst.
 * **"count"**: count is the number of particles to spawn.
 * **"countRange"**: countRange is the range for the count, and unlike most ranges is clamped to zero after being applied to the count. The ``countRange`` defaults to ``0`` so it can be left out if it is unneeded.
 * **"chance"**: chance lets you control what the chance the burst will occur is. ``0.0`` is never, ``0.5`` is half the time, ``1.0`` is every time and the default and can be left out if it is unneeded.
```
"emissionBursts": [
  [0.0, 5],
  [0.1, 5, 1],
  {"time": 0.2, "count": 10},
  {"time": 0.5, "count": 2, "countRange": 5},
  {"time": 0.8, "count": 15, "countRange": 10}, 
  {"time": 1.0, "count": 1, "chance": 0.5}
]
```

#### Particle Shaders
A particle’s shader is one of the most important parts of the system.<br>
These actually control how the data the emitter generates gets used.<br>
A lot of it is hidden in the shader code itself, and for most particle shaders it takes the particle’s position, color, and size and renders a polygon at that location.<br>
I’ll list off a couple of the common particle shaders and talk about what they do. The complete list is hidden in the particle.json file in the shaders folder.<br>
If you don’t already know where that is, you probably don’t want to look.<br>
<span class="text-secondary">Note for the adventurous, not all of the particle shaders in the particle.json are guaranteed to work in all cases!
</span>

#### Common particle shaders
 * ``particle_add``
 * ``particle_add_nohdr``
 * ``particle_add_ramp``
 * ``particle_add_soft``
 * ``particle_transparent``
 * ``particle_transparent_nohdr``
 * ``particle_transparent_ramp``
 * ``particle_transparent_soft``
 * ``particle_transparent_lit``
 * ``particle_clip``

All of these shaders work with rectangle and string particle shape types.<br>
We’ll get to the others later.
 
Let’s break these down a little because there’s a lot of repetition as they all have **“``particle_``”** at the beginning of them, so we can ignore that and just focus on the second word:

Key | Description
add | The color of the particle is added to the scene.<br>``scene color + (particle color * particle alpha)``<br>If you’re familiar with additive layers in photoshop or gimp, this works the same.
transparent | The color of the particle is blended into the scene with alpha.<br>``scene color * (1 - particle alpha) + (particle color * particle alpha)``<br>If you’re familiar with transparency in photoshop or gimp, this works the same.
clip | The color of the particle is blended into the scene with a hard edge.<br>This is not quite the hard clip like other games use, but a lot sharper than normal transparent.<br>Only really useful when used with a particle ``baseTexture`` that has alpha.

Those are relatively straight forward, except clip which I’ll leave to the reader to play with.
 
Now let’s move to the really interesting part, that last word:

Key | Description
<span class="text-secondary">nothing</span> | Your basic particle. Nothing special. Exposed by HDR if HDR is on. Will clip sharply with solid objects in the scene they intersect with.
nohdr | These particles are always rendered last, after all other particles, and do not contribute to nor are affected by HDR, and thus exposure.<br>This means they’re always the color and brightness as set.<br>When HDR rendering is turned off, this loses its meaning and all particles are nohdr, but these render last still!<br>This doesn’t mean they don’t interact with the scene though, so they’ll still clip with solid objects.
ramp | This enables the use of ramp textures as an additional method to animate the color of a particle.
soft | These particles blend with the scene in a way that they can have no hard edges.<br>This shader used with the cameraPush key can appear to blend smoothly into a scene rather than harshly cut into it.
lit | Works like soft particles, but also receives light from the ambient light and sunlight.<br>Because they are lit, you’ll often want to use black or very dim colors for the particle color itself and rely on the ``baseTexture`` for color.

And that’s it! Simple!
 
Some of you might have noticed we haven’t discussed point light or mesh particles yet, we’ll get there.<br>Point light particles don’t use shaders and mesh particles are a lot more complex in their use so they get their own section.<span class="text-secondary">(Someday)</span>

### Particle Shapes
Particle shapes change some of the behavior of particles beyond just their size, orientation, and how they blend with the scene.

Shape | Description
Rectangle | Particles render as a single rectangular polygon floating in space.<br>This is the default type of “sprite” like particle you’ve seen since games existed.
String | Particles render as a string that connect to each other and back to the emitter.<br>Useful for long thin smoke trails and the like.<br>Best when used with ``useWorldSpace`` and longer particle lifetimes.
Beam | Similar to string, but connect to a fixed point in world space and all particles are spawned at once.<br>These emitters modify the use of some common keys.<br>***See below.***
PointLight | Particles don’t render at all.<br>In fact most of the properties of a particle spec are completely ignored.<br>This uses the position of the particle from the emitter, the size, and the color to place a point light in the scene.<br>For all your real time lighting needs (as long as your needs don’t include shadows or projected textures).<br><span class="text-secondary">Tip: use large alpha values, that’s the light’s brightness.</span>
Mesh | Particles use a custom spec defined mesh and ``materialProperties`` for more advanced effects.

### Particle Facing
Particle facing works mainly with the rectangle shape type, but some options may have an effect on string and mesh particles.<br>
All of these are ignored for point light particles.

Value | Description
``Camera`` | Default. Particle faces directly towards the camera.<br>This is the traditional “sprite” style particle.
``Velocity`` | The particle aligns with the direction of travel, facing the camera as much as it can within the limits of that alignment.<br>Great for sparks or similar particles you wish to have some directionality.
``EmitterX``<br>``EmitterY``<br>``EmitterZ`` | Faces towards the emitter’s axis (as listed in the facing). A facing of ``EmitterZ`` is like the wings of a plane, ``EmitterX`` is like the tail, and ``EmitterY`` is like a propeller.
``AxialX``<br>``AxialY``<br>``AxialZ`` | Like a velocity facing, but is aligned to an emitter axis.

One more value of note when it comes to facing is the ``useInitialVelocityDir`` when used in conjunction with Velocity facing. This will use the velocity direction the particle had at the moment it spawned and keep it instead of constantly turning to match the velocity direction.<br>
Useful for bursts of dirt which you might want to have some directionality when spawned, but then fall to the ground without turning.

### Flip Books
Flip books are used to either create animated sprites or randomized the texture.<br>
Flip book textures have multiple images or frames in a single texture laid out in a grid.<br>
The ``flipBookColumns`` and ``flipBookRows`` determine the number of columns and rows in that grid.<br>
By default the game will assume the number of frames in the animation is ``columns * rows``, but in case it has fewer than that (like if the animation you have is 8 frames but you’re using a 3x3 grid) you can use ``flipBookFrames`` to define the number.

The ``frameCurve`` and ``flipBookRandomStart`` keys control how that grid of frames are used.<br>
The ``frameCurve`` is used to control the animation timing and by default is set to a single key of ``0.0``. This means that it will only display the first frame of the flip book texture by default.<br>
If you want it to animate we’ll need a curve that goes from ``0.0`` to ``1.0`` over the life of the particle.<br>
This will produce one full cycle of the frames.

Example texture with 9 frames in a 3x3 grid and the flip book keys for it for animating the number from 1 to 9 over the life of the particle:
```
"flipBookColumns": 3,
"flipBookRows": 3,
"frameCurve": [[0.0, 0.0], [1.0, 1.0]] 
```
If we don’t want it to animate, but instead just use a random digit for each particle we can remove the ``frameCurve`` and define ``flipBookRandomStart`` as true.

Or we can have it animate, and have a random start by having both a ``frameCurve`` and ``flipBookRandomStart`` for looping animations.
 
Since the ``frameCurve`` is a curve, we can actually do some other things like make it animate backwards by using ``[[0.0, 1.0], [1.0, 0.0]]``, or have it animate multiple times over the life of the particle by using ``[[0.0, 0.0], [1.0, 5.0]]``, etc.<br>
Or we can be fancy and use more than two keys in the curve to have it play the first half quickly and the last half slowly with something like this ``[[0.0, 0.0], [0.33, 0.5], [1.0, 1.0]]`` which will make the first half of the frames play through twice as fast as the last half.

With a looping smoke animation we could make the smoke move quickly when it first spawns and over time slow down the animation perhaps even to a stop so it appears as if the smoke is settling.

### Camera Push
The cameraPush key allows particles to move closer to the camera in screen space.<br>
This is useful for reducing the hard intersection of particles with solid objects in the scene.<br>
The actual value is multiplied by the particle’s size.<br>
Specifically it is multiplied by the particle’s shortest side, which prevents very long particles from getting pushed oddly far.

When used with soft or lit particles this also controls the “softness” of the particle.<br>
It’ll always blend in over the distance between the pushed position and the particle’s actual location.<br>
Camera push does not work on string or beam particle types.

### Poly Adjust Center
The ``polyAdjustCenter`` key can be used to adjust the pivot location of a velocity or axial aligned particle.<br>
The easiest way to think about it is sliding the polygon forward or back along the directional vector. This allows particles scale out in only one direction rather than symmetrically. Usual ranges are ``-0.5`` to ``0.5``.<br>
This is useful for effects that you want to project out of one side of something without it showing up on the other side.

The thin spikes that come out of the teleporter effects in PA use this on both sides, you’ll notice they’re different on both sides of the portal.

### Particle Data Format
For the most part this key is smart and will correctly determine the proper value based on the settings you’ve used in the effect. There are some specific situations where this does fail though.<br>
The “smartness” only knows about what’s in the particle spec and not in the emitter of system.

The different data formats determine what data is sent to the GPU. In general we try to send as little information as required to make the particle appear for optimization purposes. Let’s go over the different formats first.

Value | Description
``Position`` | This is the default. Particles just sends over the position, size, and rotation of the particle.<br>Also supports cameraPush.<br>Any color, including alpha, will be ignored.<br>Mainly used for a small handful of non HDR particles that are “UI” like in their use.
``PositionWithAlpha`` | This includes the same data as Position, but includes extra information about the particle’s alpha. Again mainly used for non HDR particles.
``PositionAndColor`` | Includes the same data as Position, but also includes full float color and alpha information.<br>Also includes data necessary for ramp shaders.
``PositionColorAndFlipbook`` | Includes most of the same data as ``PositionAndColor``, but includes extra information about ``UVs`` necessary for flip books instead of the data for ramp shaders.
``PositionColorAndAlignVector`` | Includes all of the data needed for the flip books, ramp shaders, and also includes a directional vector for use with velocity, axial or emitter aligned and string particles.

The problem comes when you have a particle that is uncolored in the spec, but is colored by the emitter or the system, it will likely try to use the Position or ``PositionWithAlpha`` data types, which means the color that the emitter applies is thrown out.<br>
To fix it you need to specify the ``PositionAndColor`` data format and it should work.<br>
However if you use that data format for all particles it will prevent flip books or velocity aligned particles and similar particles that need the additional data from working so it’s usually safer to not set it unless the color isn’t showing.


### Color Ramps & Particle Strings
The ``rampV`` and related keys have different meanings and uses based on the type of particle shape and shader being used.<br>
Its two uses are as an additional method of defining particle color using a second texture and for controlling the texture repeat distance for string particles.

##### Ramp Shaders
For shaders with the ``_ramp`` suffix you can use a second texture to control the color of the particle over its lifetime.<br>
The reason to use this instead of the color values in the particle is because you can create more complex color patterns more easily and you can have a range of color options which is not possible with the color curves.

Here’s an example of a ramp texture:

<img src="./resources/img/docs/particle-system/ramp.png">

Ramp textures are usually really small, this one is 16 pixels across by 8 pixels high.<br>
You’ll notice it starts white then has all the colors in the rainbow.<br>
<span class="text-secondary">(Except that purple pink color, because it’s evil.)</span>
Over the lifetime of the particle it will take the color from the texture starting from the left side going to the right side by the end of the particle’s life.<br>
At what height in the texture is defined by the ``rampV`` and ``rampRangeV`` keys. The **“``V``”** in ``rampV`` refers to the ramp texture’s **UV** space, or the point on the texture starting from the bottom left as ``0.0, 0.0`` and ``1.0, 1.0`` at the top right.

This means with the default value of ``rampV`` at ``0.0`` the particle will be kind of a purple color and fade to black over it’s life.<br>
If we set ``rampV`` to ``0.5`` it’ll be green.<br>
The ``rampRangeV`` then controls the range over that vertical space, with a ``rampRangeV`` of ``0.5`` giving the whole texture.<br>
Using that texture it means the particles can randomly be any color of the rainbow.<br>
You can pick a smaller range by playing with the ``rampV`` and ``rampRangeV`` values.

The place where I use this in the game is for flickering sparks that come off of explosions.<br>
I have a texture with several different patterns of alternating black and white.<br>
This combined with varied particle lifetimes ensures all of the particles flicker and slightly different rates.

##### Particle Strings & RampV
For strings the ``rampV`` is the distance the texture repeats in world units.<br>
The ``rampRangeV`` key modifies that as you would expect.<br>
The ``rampOffsetV`` key is slightly different in that it doesn’t change the scale of the texture repeat, but changes its starting position.<br>
This means two string particles attached to the backs of rockets won’t match exactly as the repeated texture will be slid one way or another along the string.

### Beam Particles
Beam particles are similar to string particles, but instead of being used to leave a trail they instantly connect to a target location.<br>
In most cases no target will be defined, but for beam weapon types it sets a target on the emitter that is used.<br>
For beam emitters without a target all particles are spawned at the emitter, just like normal particles.<br>
Beam particles also esque some of the common emitter time curves to instead exist across the beam.

##### Beam Curves
The emitter time curves that are reappropriated get remapped to a normalized zero to one range that is from the first particle of the beam (at the emitter) to the last (at the target).<br>
Below is a list of all the emitter time curve keys that are remapped.

Value | Description
``red``<br>``green``<br>``blue``<br>``alpha`` | color
``sizeX``<br>``sizeY``<br>``sizeRangeX``<br>``sizeRangeY`` | size
``offsetX``<br>``offsetY``<br>``OffsetZ``<br>``offsetRangeX``<br>``offsetRangeY``<br>``OffsetRangeZ`` | offsets
``velocityX``<br>``velocityY``<br>``velocityZ``<br>``velocityRangeX``<br>``velocityRangeY``<br>``velocityRangeZ``<br>``velocity``<br>``velocityRange`` | velocity
``lifetime``<br>``lifetimeRange`` | particle lifetime
``rampV``<br>``rampRangeV`` | texture repeat distance

In the case of a beam emitter used on a particle system without a beam target set you can use the offset keys to shape the beam, though they work on targeted beams as well.

##### Beam Emission & Segment Particles
Emission rate and emission bursts are used to initiate a beam similar to normal particles, but only one beam can exist at a time.<br>
A beam exists for the maximum length of time of the particles spawned in the beam, as controlled by the lifetime and lifetimeRange keys.<br>
As soon as all particles in a beam are dead a new beam will spawn if the emit rate wants a new one.<br>
You can think of it working like a normal particle emitter with a hard coded ``maxParticle`` count of one; any particles that try to spawn while the first one exists is simply ignored.

Since the emission rate keys control the spawning of the beam, they no longer control the spawning of the particles which make up the beam, instead all particles in the beam are spawned instantaneously with the beam.<br>
By default beams only have two particles, one at the beginning and one at the end target.<br>
The ``maxParticle`` key along with the new ``beamSegmentLength`` key control the number of points in the beam to increase the tesellation.<br>
If no ``beamSegmenthLength`` is defined, ``maxParticle`` sets the number of points in the beam.<br>
If ``beamSegmentLength`` is defined it takes the distance between the emitter and the target divided by that value plus one and clamped by maxParticle.<br>
So a beam that is 200 units long with a ``beamSegmentLength`` of 10 and ``maxParticle`` of 30 will have 21 points.<br>
Note that the particle count is clamped to a minimum of two, no matter what ``beamSegmentLength`` or ``maxParticle`` is set to.

The particles that make up a beam can be controlled just like any other particle, and connect together like a string particle emitter.<br>
Offsets, velocity, color all work like they would on any other particle. The key difference is the location of the particles will be additionally offset to go along the beam to the target.<br>
For advanced users, this “along beam offset” happens after the base offsets and initial velocity are calculated, so radial velocity does not take into account the beam position.

### Mesh Particles
Mesh particles add a whole extra level of complexity to particles.<br>
For the moment this section is incomplete but may eventually have more information.<br>
Until then, good luck!

##### Mesh Shaders
Not all shaders support mesh particles, but many of the shaders have mesh particle specific versions.<br>
Mesh particles also allow for more customized shaders.

##### Mesh Material Properties
The materialProperties replace the baseTexture and rampTexture keys as well let you define your own color parameters to pass to the particle’s shader. This allows for a greater number of textures and passing custom values to the material.<br>
Note, these values cannot be changed over like other particle colors and are constant throughout the emitter’s life.<br>
They may also not be used as colors in the shader, and are useful for passing specific number values to custom shaders.

##### Mesh Scale
Because there are only two size values for particles, mesh particles use the ``sizeX`` to scale two dimensions and ``sizeY`` to scale the third.<br>
Generally the ``x`` and ``y`` dimensions are controlled by ``sizeX`` and `z` is controlled by ``sizeY``.


### Particle Color

##### Red, Green, Blue and sRGB
Particle colors, the red, green, blue, and alpha values specifically, as well as the system wide color value, are defined as linear space float colors.

The color format most people are used to are actually a 24 bit sRGB rgb color, or three 8 bit color **“channels”** (red, green, and blue). Examples of this would be ``[r=255, g=255, b=255]`` is an 8 bit representations of red, green, and blue that make the color white, where linear is ``[r=1.0, g=1.0, b=1.0]``. That seems pretty straight forward, but ``[r=127, g=127, b=127]`` (middle grey) is ``[r=0.2122, g=0.2122, b=0.2122]`` in linear rather than the perhaps expected ``[r=0.5, g=0.5, b=0.5]`` which is actually a quite bright grey.

To convert from 8 bit colors you might be used to seeing in your favorite graphics program to linear color (or from linear to 8 bit) you need to use an sRGB conversion which can be found on the wikipedia page for sRGB here.<br>
Alternatively you can get a fairly close approximation of this by using this formula: 
```
(binaryColorValue / 255) ^ 2.2 
```
<span class="text-secondary">Note: Alpha is always in linear, so no special conversion is needed beyond being a **0.0 - 1.0** range.</span>
 
This can be tedious to do, but we render in linear space and need linear colors so we can represent colors brighter than just “white”.

###### RGB curve.
The rgb curve replaces the red, green, and blue (and optionally alpha) curves with a more artist friendly representation.<br>
Unlike the red, green, blue values, this lets you define colors in a format that matches the 24 bit sRGB rgb color values you get from a graphics program plus an easy way to scale the brightness.<br>
Basically it does the sRGB conversion from 8 bit **0 - 255** colors to float **0.0 - 1.0** colors so you don’t have to do it yourself.

Like other curves it has a shorthand and basic form, but it does not have a complete form and is included below just for clarity.

Example | Form
```"rgb": [1.0, [255, 255, 255, 255]]``` | shorthand
```"rgb": [1.0, [255, 255, 255]]``` | shorthand w/o alpha
```"rgb": [[0.0, 1.0, [255, 255, 255, 255]]],``` | basic
```"rgb": [[0.0, 1.0, [255, 255, 255]]],``` | basic w/o alpha
```"rgb": [{"time": 0.0, "mult": 1.0, "color": [255, 255, 255, 255]}]``` | complete form

Let’s go over the basic form first, which you’ll notice there’s two versions of but we’ll focus on the first one for now.<br>
The first number is the time, just like every other curve we use.<br>
The second number is a multiplier, we’ll get back to that in a moment.<br>
The third section is an array of numbers that lets you define a color in the same format as you might get out of a paint application like Gimp or Photoshop, a 24 bit sRGB rgb color.<br>
This color is converted into the linear colors the game uses internally, and then multiplied by the multiplier so you can get colors that are brighter than just one.

The first three numbers of that third section are the red, green, and blue colors, the fourth number is the alpha value and is just converted from 0 - 255 to 0.0 - 1.0, the multiplier isn’t applied.<br>
This technically makes this a 32 bit sRGB rgba color, but that’s just going to make things more confusing for most of you.

If you have red, green, blue or alpha curves in your emitter or particle spec (depending on where the rgb curve is) it’ll override those other color curves and use the values in the rgb curve.

This brings us to the basic without alpha form.<br>
It’s identical to the basic form but omits the alpha from the color.<br>
With this form you can define an alpha curve on its own that’ll be used.<br>
This makes it easier if you don’t want the timing of the alpha keys to match the color.

The shorthand version is the same as the basic form, but is without the extra set of square brackets and the first value is the multiplier; there is no time value.<br>
This is useful if you want to define a constant color, and using the shorthand form without alpha you can still have a particle fade in and out without having to type as much.

#### Final Particle Color
The color of particles is the result of several elements coming together. The most basic explanation is this:
```
systemColor * emitterColor * particleColor 
```
The **“systemColor”** by default is white, but can be changed with ``useArmyColor`` or the system color value.<br>
The **“emitterColor”** is the color from the emitter time color curves at the time the particle spawns and remains constant for that particle’s entire life.<br>
The **“particleColor”** is from the particle time color curves and changes over the life of the particle.

This **“final”** color is then handed to the shader.<br>
Different shaders do different things with that color, but most commonly it simply multiplies the ``baseTexture`` by this color and that’s what’s rendered.<br>
Shaders with a rampTexture, the color is multiplied further by the color in the ramp texture, and lit textures also multiply the color by the sunlight and ambient light colors.