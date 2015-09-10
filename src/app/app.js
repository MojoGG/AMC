'use strict';

var app = angular.module('AniMan', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
