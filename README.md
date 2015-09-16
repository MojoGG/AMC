Welcome to AniMan Center
=======
AniMan Center is a Tool to read Mangas and watch Anime from a lot of different sources. All in one programm.

Features
--------
Features with an (NYI) are **Not Yet Implemented**
 - Read Mangas from different sources (NYI)
 - Download latest Chapters automatically (NYI)
 - Bookmark your favourite Mangas (NYI)

Installation
-------
Currently the only way to install it is to download the source code and run the following commands

    # npm install -g grunt-cli bower
    # npm install
    # bower install
    # grunt nwjs

A built version will then be placed in the *build* folder.
To change the build platform you simply have to change the platform parameter in the *Gruntfile.js*

     options: {
                version: '0.12.1',
                platforms: ['linux64'],
	            build_dir: './build',
                keep_nw: true,
                embed_nw: false,
            },
