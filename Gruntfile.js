module.exports = function(grunt) {

    grunt.initConfig({
        nwjs: {
            options: {
                version: '0.12.1',
                platforms: ['linux64'],
                build_dir: './build', // Where the build version of my node-webkit app is saved
                keep_nw: true,
                embed_nw: false,
            },
            src: [
                './index.html',
                './plugins/**',
                './js/**',
                './view/**',
                './img/**',
                './package.json'
            ]
        },
        wiredep: {
            task: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.html'
                ],
                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-nw-builder');
    grunt.loadNpmTasks('grunt-wiredep');

};