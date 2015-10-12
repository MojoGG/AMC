app.controller("singleAnimeController", function ($scope,$stateParams,AnimeNewsNetworkFactory) {
    $scope.aid = $stateParams.aid;
    $scope.anime;

    AnimeNewsNetworkFactory.getSingleAnime($scope.aid).then(function(data){
        logger.info(JSON.stringify(data))
        $scope.manga = data;
    });

});