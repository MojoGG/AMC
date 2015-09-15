app.controller("singleMangaController", function ($scope,$stateParams,mangaListFactory) {
    $scope.mid = $stateParams.mid;

    mangaListFactory.getSingleManga($scope.mid).then(function(data){
        $scope.manga = data;
    })

});