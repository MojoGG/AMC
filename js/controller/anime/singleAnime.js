app.controller("singleAnimeController", function ($scope,$stateParams,AnimeNewsNetworkFactory) {
    $scope.aid = $stateParams.aid;
    $scope.anime;

    AnimeNewsNetworkFactory.getSingleAnime($scope.aid).then(function(data){
        console.log(JSON.stringify(data))
        $scope.manga = data;
    })

});