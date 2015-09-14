app.factory('mangaListFactory',function($http){
    var async = require('async');


    return {
        getMangaList : function(){
            $http({
                method:'GET',
                url:'http://www.mangafox.me/manga'
            }).success(function (data, status, headers, config) {
                console.log(data);
            }).error(function (data, status, headers, config) {
                    console.log("error")
                });

           /* var deferred = $q.defer();
            var body;
            request("http://mangafox.me/manga/", function(error, response, html){
                //console.log(error + " " + response);
                if(!error){
                    console.log("Download Finished!");
                    var $ = cheerio.load(html)

                    var mangas = $('div.left > div.manga_list > ul > li').children();

                    async.forEach($('div.left > div.manga_list > ul > li').children(),function(item, key, callback){
                        console.log(mangas[key].text());
                    })
                }
            })*/
        }
    }
})