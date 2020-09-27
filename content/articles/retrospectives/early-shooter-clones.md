---
image: "/img/games/doom2.jpeg"
date: "2006-11-02"
title: "Early Shooter Clones"
tags:
    - 'retro shooters'
    - 'doom'
    - 'wolfenstein 3d'
    - 'rise of the triad'
    - 'quake'
    - 'duke nukem 3d'
aliases:
    - /articles/early-shooter-clones/
description: "Feeling nostalgic? You can play enhanced versions of your favourite nineties retro shooter - just follow these instructions."
---

!["Wolfenstein 3D screencap"](/img/articles/ShooterClones.png)

### People feeling nostalgic can play enhanced versions the games:

For Quake, you'll need:

1. ezQuake Win32 Installer (Just install in a directory)
2. Pak0.pak Quake Demo version (Or copy pak0 and pak1 from your original Qake)
3. Create a new dir in the ezQuake install dir called "id1" and Unzip pak0.pak
4. Play! (start with ezstart, press ESC in the console!)

For Duke3D, you'll need:

1. eDuke32 Win32 Installer (Just install in a directory)
2. Duke3D Demo - only keep DUKE.GRP after installing
3. If you feel like it, install the High Resolution Pack! (115 MB) (Already includes eDuke32)
4. Play! (setup your GRP install dir first)

For Doom, you'll need:

1. zDoom Win32 Binaries (Just extract in a directory)
2. Doom.wad Demo Version (you can delete other files)
3. Extract the WAD file to the zDoom install dir or copy your full version ones (DOOM, DOOM II, Final Doom e.a., Hexen, Heretic all fully supported!)
4. Play!

For Wolfenstein 3D, you'll need:

1. DOSBox Win32 Installer (Just install in a directory)
2. Wolfenstein 3D Demo (Unzip in a new subdir of the DOSBox install dir)
3. Play! (Start DOSBox, mount your dir and execute 'wolf3d')

Every shooter fan should by now have played at least one of id's popular shooters, whether it's DOOM or the older Wolfenstein3D. However, what most players aren't aware of is those games really popularized the shooter genre, as well as "cloning" games based on previously released ones. Let us take a look at the gaming history; specifically the shooter genre. We already took a quick look at various multiplayer cooperative gameplay modes and their origin, and we also learned a couple of Apogee's games used the Wolf3D engine. Let us narrow our viewpoint down to one game at a time, and their sequentially spin-offs.

### 1. Wolf3D: Introducting first person Shooters

Wolfenstein 3D is generally regarded as having popularized the first person shooter genre on the PC/DOS platforms. The game was published by [Apogee](/tags/apogee) and created by id - it has been ported to many other available platforms including SNES and GBA. Wolf3D was the first game (or at least one of the first) to implement a pseudo-3D world using smart computer graphics techniques such as ray casting, a special case of ray tracing. With ray casting, you basically draw one big line for each column of pixels and check if it intersected a wall or not. Depending on that outcome it builds the entire screen, without having to draw the whole scene. This rendering technique was already used by id Software in their [Catacomb 3D game](https://en.wikipedia.org/wiki/Catacomb_3-D), in 1991.

Due to the rendering method, Wolf3D lacks many features represent in other First Person games such as [Ultima Underworld](https://en.wikipedia.org/wiki/Ultima_Underworld:_The_Stygian_Abyss). Wolf3D only featured base textures: the ceiling and floor are solid colors. Wolfenstein also misses lightning and height differences. Of course the game is not considered true 3D since it uses sprites rather than polygons to draw enemies and objects. Wolfenstein 3D was also the first game to introduce the ExLx map/level identify: Episode x Level x. Many other shareware games followed its example, not only Shooters.

Initial Wolf3D features:

- Create a pseudo-like 3D environment by ray casting
- Textured walls (only)
- Introducing the ExLx map system
- sprite based objects
- Added Wolf3D features by clones:
- Ceiling and floor texturing
- Auto-map systems
- Shootable sprites/objects
- (Very) primitive lightning usage
- "Fake" height differences

![rise  of the triad](/img/articles/shooter_RiseTriad.png)

Shooters utilizing the Wolf3D game engine:

- Blake Stone
- Corridor 7
- Operation Body Count
- Super Noah's Ark 3D
- Rise of the Triad
- Shadowcaster
- Hellraiser

Many listed games implemented some extra's besides the base Wolf3D engine. For example, in Blake Stone, floors and ceilings were actually mapped to textures. (See Screenshot) Blake Stone also featured an auto-map in which players can track their location and the rooms they have visited before. Wolfenstein's map system was sometimes labyrinthic and not finding the much needed keys to access the exit zone could get very frustrating. Still no height differences or spectacular lightning sources present though.
Rise of the Triad, the WWII game from Apogee, could be classified as an exception. Yes, it uses the Wolfenstein 3D engine. But the engine was heavily modified. Actually little of the original Wolf3D code remained in the final ROTT version. Rise of the Triad was supposed to compete with the new generation Shooters - mostly DOOM. Therefore, the developers made sure they included some of DOOM's features and even some DOOM did not have. For example, most objects in ROTT are destroyable (shoot at them). Rise of the Triad featured very wide open levels with trampolines, walkable staircase-like objects, and more. In some rooms, the game uses primitive light sourcing, with torches and lights that can be shot out, dimming the room.

Even though Rise of the Triad pioneered a number of concepts, such as bullet marks, "akimbo" guns, and level-over-level support, DOOM's non-orthogonal, height-difference maps gained far more publicity. Read the "[ROTT in Hell](https://archive.kontek.net/rott.classicgaming.gamespy.com/hell/index.html)" article for a full overview of ROTT's features.

![doom II](/img/articles/shooter_DoomII.jpg)

### 2. DOOM: Height Difference, lightning sources and multiplayer.

Rise of the Triad was actually released one year after DOOM I in 1993. DOOM gained far more popularity: it was downloaded by an estimated 10 million people within two years, popularizing the mode of gameplay and spawning a gaming subculture. As mentioned in the [Cooperative Arts](/articles/cooperative-arts) article, Doom was also responsible for the overly popular mulitplayer (via local LAN for now) shooters nowadays. Doom's engine made it possible to create a more immersive feeling while playing the game, partially thanks to the excellent stereo audio system and use of lightning in dark rooms.

Doom the game is widely accepted as one of the most influential pioneers of gaming in the mid 1990s. Most gamers did not only love Doom thanks to Carmak's graphics engine, but mostly because the engine was modular! This allows the game content to be replaced by loading custom WAD files. Wolfenstein 3D was not designed to be expandable, but fans had nevertheless figured out how to create their own levels for it, and Doom was designed to take the phenomenon further.

Initial DOOM features:

- Height differences
- Non-perpendicular walls instead of a rectangular grid
- Swaying of the weapons
- Fully textured maps including lower and upper walls
- Varying light levels

Obviously, thanks to DOOM's modularity, the game knew many Total Conversion clones, developed by other companies such as [Raven Software](http://ravensoft.com). DOOM's sequel, released in 1995, did not really modify the used engine. Instead, DOOM II featured almost twice as much different enemies, of course all new levels and one new weapon, the double barrel shotgun. DOOM's levels are also divided into episodes, and DOOM II featured one big episode instead of three little ones. DOOM's popularity also led to the development of expansion packs: the Ultimate Doom and Final Doom.

![duke nukem 3d](/img/articles/shooter_Duke3D.jpg)

Shooters utilizing the Doom game engine:

- Heretic
- HeXen
- Chex Quest
- Strife

Instead of using ray casting, Doom used the Binary Space Partitioning technique to efficiently render the game scenes. However, this method has a few drawbacks: it is for instance impossible for different rooms to stack. There are height differences, but you won't ever see multiple area's on top of each other. Walls also cannot move horizontally.

Shooters commonly counted as Doom clones with different engines:

- Star Wars: Dark Forces
- Rise of the Triad (wrongly classified)
- Witchhaven
- Gloom
- Blood
- Duke Nukem 3D
- Shadow Warrior
- Outlaws

Since Doom was released and the game kept on winning players, industry giants tried cloning the game in an attempt to push it from the throne. Almost every released shooter game after DOOM was controversially classified as a simple DOOM clone, even ROTT received many negative feedback. The most popular "Doom clone" is Duke Nukem 3D?, released in 1996. 3D Realms built their own custom engine, simply called Build Engine, also used in Redneck Rampage e.a. Like Doom, the Build engine represents its world on a two-dimensional grid using closed 2D shapes called sectors, and uses simple flat objects called sprites to populate the world geometry with objects.

The Build engine did allow more flexible worlds than Doom. Sectors could be manipulated in real-time; their shape, heights, and slope angles being completely variable, without requiring recalculation of rendering information. Later versions of the Build Engine even featured "Voxels" by replacing game selected art tiles by 3D objects. Although this feature appeared too late to be implemented into Duke3D, Blood and Shadow Warrior both use them extensively. The Build Engine was also enhanced a couple of times to be able to run in modern Windows environments. For more information, visit the [eduke32](http://www.eduke32.com/) project website.

![quake](/img/articles/shooter_Quake.jpg)

### 3. Quake: fully 3D rendered, mouselook and multiplayer evolutions

Quake incorporated several major advances in the 3D game genre: it uses 3-dimensional models for players and monsters instead of 2-dimensional sprites like it's predecessors. Previous shooter games (called "2.5D" games) used mathematical tricks to render a 3D scene - only when looking straight ahead. Quake made it also possible to view from completely different angles: slightly above, down, diagonal, ... - Quake invented (Actually it should be popularized since Bethesda firstly implemented this method in Terminator) the mouselook navigation method. You are able to use the mouse as a navigation crosshair and the keyboard to walk or strafe although this option was not set as the standard control scheme until Quake II.

Because of the radically different rendering method, most 486 Computers had difficulties running the game. Pentium processors made it possible to run Quake more fluidly thanks to the more advanced floating point calculator. Quake was one of the first games to support 3D hardware acceleration techniques via openGL. \\id Software recognized, before anyone else, that the future of competitive gaming lay with the Internet, and so Quake was the second game whose multiplayer could be played against many people on the Internet rather than with only people on a local network.

Again, thanks to the game's popularity and engine (and even scripting) modularity, Quake was the source of many fan-made modifications. One of those modifications incorporated the nowadays well-known Capture The Flag (CTF) multiplayer game mode. The Team Fortress modification also incorporated a CTF mode, with class-based player indexing. The [QuakeWorld](http://wiki.quakeworld.nu/Overview) update to Quake allowed the game to be played more fluidly across the Internet (using TCP/IP e.a.). Many front-end clients have been released since then to further support the on-line Quake player community.

Shooters utilizing the Quake game engine (with or without heavy mods):

- Quake Mission Packs
- Dark Hour
- Eternal War
- Malice
- Shrak
- HeXen II
- Half-Life (with portions of QII engine code) e.a.
- Lazer Arena
- X-Men: The Ravages Of Apocalypse

### Handy References

Addendum 2018 - Most links were broken so I simply removed them. I'm sure you're proficient enough with Interne search engines to fish up the article to your liking. 

**Resources**

- Doom Clones: Wikipedia Entry
- The Hunt: Rise of the Triad information page
- ZDoom WAD interpreter
- ZDaemon: enabling online multiplayer Doom
- EZQuake modern QuakeWorld client
- The Quake Engine Family Tree (Wikipedia)

**Documents explaining Graphics techniques**

- Ray Casting Tutorial including Java example
- Ray Casting Tutorial: Making your own Wolf3D
- Introduction to Binary Space Partitioning Trees
- How are BSP Trees used in DOOM?
- Volume Graphics: Voxels explained
