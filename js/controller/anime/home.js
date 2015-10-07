app.controller("homeAnimeController", function ($scope,$rootScope,NyaaFactory) {
    $scope.animes = new Array();
    $scope.scrollstop = true;
    $scope.list;

    $scope.settings = $rootScope.settings;

    $scope.loadData = function(){
        console.log("INIT!");
        if($scope.settings["anime_stream"] =='torrent'){
            console.log("TORRENT!");
            NyaaFactory.getAllAnime().then(function(data){
                console.log("Fetched all animes");
                $scope.list = data;

                $scope.scrollstop = false;
            });
        }
    };

    $scope.loadMore = function(){
        var last = $scope.animes.length - 1;
        for(var i = 1; i <= 10; i++) {

        }
    }
});