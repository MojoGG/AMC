app.controller("homeController", function ($scope,mangaListFactory) {
    $scope.mangas = new Array();
    $scope.scrollstop = true;
    $scope.list;
    mangaListFactory.getMangaList().then(function(data){
        //console.log(data);
        //console.log(data.length)
        $scope.list = data;
        mangaListFactory.getSingleManga(0).then(function(singledata){
            logger.info("Pushed New Manga into Manga Array");
            //console.log(JSON.stringify(data))
            // console.log(data["0"]["img"])
            $scope.mangas.push(singledata);
        });
        $scope.scrollstop = false;
    });

    $scope.loadMore = function(){
        var last = $scope.mangas.length - 1;
        for(var i = 1; i <= 10; i++) {
            mangaListFactory.getSingleManga(last+i).then(function(data){
                logger.info("Pushed New Manga into Manga Array");
                //console.log(JSON.stringify(data))
                if(!_.contains($scope.mangas,data)) {
                    $scope.mangas.push(data);
                }
            });
            //console.log($scope.mangas[last+i]["title"])
        }
    }
});