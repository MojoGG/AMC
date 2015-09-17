app.controller("homeAnimeController", function ($scope,kissanimeFactory) {
    $scope.animes = new Array();
    $scope.scrollstop = true;
    $scope.list;

    kissanimeFactory.getAllAnime().then(function(data){
        //console.log(data);
        //console.log(data.length)
        $scope.list = data;
        kissanimeFactory.getSingleAnime(data[0]["url"]).then(function());
        $scope.scrollstop = false;
    });

    $scope.loadMore = function(){
        /*var last = $scope.animes.length - 1;
        for(var i = 1; i <= 10; i++) {
            kissanimeFactory.getSingleManga(last+i).then(function(data){
                console.log("Pushed New Manga");
                //console.log(JSON.stringify(data))
                $scope.mangas.push(data);
            });
            //console.log($scope.mangas[last+i]["title"])
        }*/
    }
});