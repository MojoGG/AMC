var fs = require('fs');
var parseString = require('xml2js').parseString;
app.factory('AnimeNewsNetworkFactory',function($q,$http){

    var animelist = loadAnimeList();

    function loadAnimeList() {
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: 'https://www.animenewsnetwork.com/encyclopedia/reports.xml',
            params: {
                id:155,
                type:"anime"
            },
            cache:true
        }).success(function(data){
            //console.log(data);
            parseString(data, function (err, result) {
                console.log("Parse successfull!");
                //console.log(JSON.stringify(result["report"]["item"]));
                defer.resolve(result["report"]["item"]);
                //console.log(JSON.stringify(result));
                fs.writeFile("./cache/animes.json", JSON.stringify(result), function (err) {
                    if (err) {
                        return console.log(JSON.stringify(err));
                    }
                    console.log("The file was saved!");
                });
            });
        }).error(function(){
            alert("error");
        });

        return defer.promise;
    }

    return{
        getAllAnime:function(){
            return animelist;
        },
        getSingleAnime:function(id){
            //console.log(id);
            var defer = $q.defer();

             $http({
                    method: 'GET',
                    url: ' http://cdn.animenewsnetwork.com/encyclopedia/api.xml',
                    params: {
                        anime:id
                    },
                    cache:true
                }).success(function(data){
                    //console.log(data);
                    parseString(data, function (err, result) {
                        console.log("Parse successfull!");
                        console.log(JSON.stringify(result["ann"]["anime"][0]));
                        defer.resolve({
                            id : id,
                            name : result["ann"]["anime"][0]["$"]["name"],
                            img : result["ann"]["anime"][0]["info"][0]["$"]["src"]
                        });
                    });
                }).error(function(err){
                    console.log("Error!");
                });
            return defer.promise;
        }
    }
});