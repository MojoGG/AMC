app.factory('mangaListFactory',function($q){
    var async = require('async');
    var Xray = require('x-ray');

    var mangas = loadMangas().then(function(data){
        return data;
    })

    function loadMangas(){
        var defer = $q.defer();
        var X = Xray();
        X('http://mangafox.me/manga', 'div.left > div.manga_list > ul > li',[{
            title: 'a',
            link: 'a@href'
        }])(function(err, obj) {
            console.log("Download Done " + err);
            //console.log(obj.length)
            defer.resolve(obj);
        })
        return defer.promise;
    }

    return {
        getMangaList : function(){
            return mangas;
        },
        getSingleManga : function(id){
            return mangas.then(function(data){
                return data[id];
            })
        }
    }
})