'use strict';
var
// Load native UI library
    gui = require('nw.gui'),
// browser window object
    win = gui.Window.get(),
// os object
    os = require('os');

var winston = require('winston');
var path = require('path');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            name: 'info-file',
            filename: path.join(gui.App.dataPath, 'filelog-info.log'),
            level: 'info'
        }),
        new (winston.transports.File)({
            name: 'error-file',
            filename: path.join(gui.App.dataPath, 'filelog-info.error'),
            level: 'error'
        })
    ]
});

var low = require('lowdb');
var db = low(path.join(gui.App.dataPath, 'cache.db'));

var app = angular.module('AniMan', [
    'ngResource',
    'ui.router',
    'infinite-scroll',
    'cfp.hotkeys'
]);
