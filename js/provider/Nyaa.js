var NT = require("nyaatorrents"),
    nt = new NT("http://www.nyaa.eu");
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var async = require('async');
var Xray = require('x-ray');
var X = Xray();
var _ = require('underscore');
var moment = require('moment');

app.factory('NyaaFactory',function($q, $http){

    var animelist = loadAnimeList();

    function loadAnimeList() {
        var defer = $q.defer();

        X('http://myanimelist.net/topanime.php', 'table > tbody', [{
            title: 'tr > td > div > a.hoverinfo_trigger'
        }])(function (err, obj) {
            console.log("Mangalist Download Done " + err);
            console.log(JSON.stringify(obj));
            defer.resolve(obj);
        });

        return defer.promise;
    }

    return{
        getAllAnime:function(){
            return animelist;
        },
        getSingleAnime:function(id){
            var defer = $q.defer();

            return defer.promise;
        }
    }
});