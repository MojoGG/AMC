var getHost = function () {
    return {
        get linux() {
            return process.platform === 'linux';
        },
        get windows() {
            return process.platform === 'win32';
        },
        get mac() {
            return process.platform === 'darwin';
        },
    };
};

var parseBuildPlatforms = function (argumentPlatform) {
    // this will make it build no platform when the platform option is specified
    // without a value which makes argumentPlatform into a boolean
    var inputPlatforms = argumentPlatform || process.platform + ";" + process.arch;

    // Do some scrubbing to make it easier to match in the regexes bellow
    inputPlatforms = inputPlatforms.replace("darwin", "mac");
    inputPlatforms = inputPlatforms.replace(/;ia|;x|;arm/, "");

    var buildAll = /^all$/.test(inputPlatforms);

    var buildPlatforms = {
        mac: /mac/.test(inputPlatforms) || buildAll,
        win: /win/.test(inputPlatforms) || buildAll,
        linux32: /linux32/.test(inputPlatforms) || buildAll,
        linux64: /linux64/.test(inputPlatforms) || buildAll
    };

    return buildPlatforms;
};

module.exports = function(grunt) {

    var host = getHost();
    var buildPlatforms = parseBuildPlatforms(grunt.option('platforms'));

    grunt.initConfig({
        nwjs: {
            options: {
                version: '0.12.1',
                platforms: ['linux64'],
                build_dir: './build', // Where the build version of my node-webkit app is saved
                keep_nw: true,
                embed_nw: false,
                macZip: buildPlatforms.win, // Zip nw for mac in windows. Prevent path too long if build all is used.
                mac: buildPlatforms.mac,
                win: buildPlatforms.win,
                linux32: buildPlatforms.linux32,
                linux64: buildPlatforms.linux64
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
                '!./node_modules/*grunt*/**',
                '!./node_modules/wirdep/**',
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
    grunt.loadNpmTasks('grunt-bower-clean');

    grunt.task.registerTask('build', ['wiredep','bower_clean','nwjs'])
};