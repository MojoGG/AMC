app.controller("singleMangaController", function ($scope,$stateParams,mangaListFactory) {
    $scope.mid = $stateParams.mid;
    $scope.manga;

    mangaListFactory.getSingleManga($scope.mid).then(function(data){
        //console.log(JSON.stringify(data))
        $scope.manga = data;
    })

});