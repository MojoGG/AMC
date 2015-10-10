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
                './package.json',
                './index.html',
                './plugins/**',
                './js/**',
                './view/**',
                './img/**',
                './node_modules/**',
                './conf/**',
                '!./node_modules/nw-gyp/**',
                '!./node_modules/**/*.bin',
                '!./node_modules/**/*.c',
                '!./node_modules/**/*.h',
                '!./node_modules/**/Makefile',
                '!./node_modules/**/*.h',
                '!./node_modules/bower/**',
                '!./node_modules/*grunt*/**'
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
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: '**/*.js',
                    dest: 'cache/js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-nw-builder');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.task.registerTask('build', ['wiredep','nwjs'])
};