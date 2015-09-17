app.controller("readerController", function ($scope,$stateParams,mangaListFactory) {
    var mid = $stateParams.mid;
    var cid = $stateParams.cid;

    $scope.imgindex = 0;

    mangaListFactory.getChapter(mid,cid).then(function(data){
        $scope.chapter = data;
    })
});