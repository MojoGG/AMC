var AnimeUtils = require('anime-scraper').AnimeUtils;
var Anime = require('anime-scraper').Anime;
var cloudscraper = require('cloudscraper');

app.factory('kissanimeFactory',function($q){

    var animelist = loadAnimeList();

    function loadCloudCookie(){
        var defer = $q.defer();
        cloudscraper.get('http://kissanime.com', function(err, body, resp) {
            var cookieString = resp.request.headers.cookie;
            console.log(cookieString);
            defer.resolve(cookieString);
        });
        return defer.promise;
    }

    function loadAnimeList(){
        var defer = $q.defer();
        loadCloudCookie().then(function(cloudcookie) {
            AnimeUtils.setSessionCookie(cloudcookie);
            AnimeUtils.searchByName('').then(function (results) {
                console.log("Animelist Download complete")
                defer.resolve(results);
            })
        });
        return defer.promise;
    }

    return{
        getAllAnime:function(){
            return animelist;
        },
        getSingleAnime:function(url){
            loadCloudCookie().then(function(cloudcookie) {
                AnimeUtils.setSessionCookie(cloudcookie);
                return Anime.fromUrl(url).then(function(anime) {
                    //console.log(JSON.stringify(anime));
                    return anime;
                })
            });
        }
    }
});