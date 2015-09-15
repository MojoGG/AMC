app.controller("homeController", function ($scope,mangaListFactory) {
    $scope.mangas = new Array();
    $scope.scrollstop = true;
    $scope.list;
    mangaListFactory.getMangaList().then(function(data){
        //console.log(data);
        //console.log(data.length)
        $scope.list = data;
        $scope.mangas.push($scope.list[0]);
        $scope.scrollstop = false;
    });

    $scope.loadMore = function(){
        var last = $scope.mangas.length - 1;
        for(var i = 1; i <= 10; i++) {
            $scope.mangas.push($scope.list[last + i]);
            console.log($scope.mangas[last+i]["title"])
        }
    }
});