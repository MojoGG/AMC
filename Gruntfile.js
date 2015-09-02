module.exports = function(grunt) {

    grunt.initConfig({
        nwjs: {
            options: {
                platforms: ['linux64'],
                build_dir: './build', // Where the build version of my node-webkit app is saved
                keep_nw: true,
                embed_nw: false,
            },
            src: [
                './src/**',
                './package.json'
            ]
        },
    })

    grunt.loadNpmTasks('grunt-nw-builder');

};