app.controller("homeController", function ($scope,mangaListFactory) {
    $scope.list = mangaListFactory.getMangaList();
});