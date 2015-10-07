Welcome to AniMan Center
=======
AniMan Center is a Tool to read Mangas and watch Anime from a lot of different sources. All in one programm.

Features
--------
Features with an (NYI) are **Not Yet Implemented**

 - Manga
	 - Sources
		 - Mangafox.me
		 - Batoto **(NYI)**
		 - MangaEden **(NYI)**
	 - Features
		 - Get all Mangas
		 - Order Mangas **(NYI)**
		 - Get Manga Details
		 - Load & read Chapters
 - Anime
	 - Sources
		 - KissAnime **(NYI)**
		 - Nyaa **(NYI)**
	 - Features
		 - Stream Anime over Torrents **(NYI)**
		 - Stream Anime over web player **(NYI)**
		 - List all Animes
		 - Order Animes **(NYI)**
		 - Get Anime Detail (inkl Ratings) **(NYI)**
 - Settings **(NYI)**
	 - Different Designs (Different AdimLTE designs)
	 - Multiple Language **(NYI)**

Installation
-------
Currently the only way to install it is to download the source code and run the following commands

    # npm install -g grunt-cli bower
    # npm install
    # bower install
    # grunt build

A built version will then be placed in the *build* folder.
To change the build platform you simply have to change the platform parameter in the *Gruntfile.js*

     options: {
                version: '0.12.1',
                platforms: ['linux64'],
	            build_dir: './build',
                keep_nw: true,
                embed_nw: false,
            },

Libaries & Modules
-------
All of the features above are only possible thanks to a lot of great libaries and Modules so i want to credit them on this page!

 - [X-Ray](https://github.com/lapwinglabs/x-ray)
 - [CloudScraper](https://github.com/codemanki/cloudscraper)
 - [Angular Hotkeys](https://github.com/chieffancypants/angular-hotkeys)
 - [AdminLTE](https://almsaeedstudio.com/) & [Bootstrap](http://getbootstrap.com/)
 - [ngInfiniteScroll](https://github.com/sroze/ngInfiniteScroll)