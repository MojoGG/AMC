app.controller("singleAnimeController", function ($scope,$stateParams,AnimeNewsNetworkFactory,NyaaFactory) {
    $scope.aid = $stateParams.aid;
    $scope.anime;
    $scope.torrents;

    AnimeNewsNetworkFactory.getSingleAnime($scope.aid).then(function(data){
        logger.info(JSON.stringify(data));
        $scope.anime = data;
        console.log(data["name"]);
        NyaaFactory.getItems(data["name"]).then(function(data){
            console.log(JSON.stringify(data));
        })
    })

});