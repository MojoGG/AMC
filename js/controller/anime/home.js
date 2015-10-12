var _ = require('underscore');
app.controller("homeAnimeController", function ($scope,$rootScope,AnimeNewsNetworkFactory) {
    $scope.animes = new Array();
    $scope.scrollstop = true;
    $scope.list;

    $scope.settings = $rootScope.settings;

    $scope.loadData = function(){
        if($scope.settings["anime_stream"] =='torrent'){
            logger.info("TORRENT!");
            AnimeNewsNetworkFactory.getAllAnime().then(function(data){
                logger.info("Fetched all animes");
                $scope.list = data;

                //$scope.animes.push($scope.list[0]);
                AnimeNewsNetworkFactory.getSingleAnime($scope.list[0]["id"][0]).then(function(data){
                    $scope.animes.push(data);
                    //console.log(JSON.stringify(data));
                });
                $scope.scrollstop = false;
            });
        }
    };

    $scope.loadMore = function(){
        var last = $scope.animes.length - 1;
        for(var i = 1; i <= 10; i++) {
            //console.log(JSON.stringify($scope.list[last+i]["id"][0]));
            AnimeNewsNetworkFactory.getSingleAnime($scope.list[last+i]["id"][0]).then(function(data){
                if(!_.contains($scope.animes,data)) {
                    $scope.animes.push(data);
                    //console.log(JSON.stringify(data));
                }
            });
        }
    }
});