app.controller("readerController", function ($scope,$stateParams,mangaListFactory,hotkeys) {
    var mid = $stateParams.mid;
    var cid = $stateParams.cid;

    $scope.imgindex = 0;

    mangaListFactory.getChapter(mid,cid).then(function(data){
        $scope.chapter = data;
    });

    $scope.loadChapter = function(){
        mangaListFactory.getChapter(mid,cid).then(function(data){
            $scope.chapter = data;
            console.log(JSON.stringify(data));
            $scope.imgindex = 0;
        });
    };

    hotkeys.bindTo($scope).add({
        combo:'right',
        description: 'Next Image/Chapter',
        callback: function() {
            if($scope.chapter["count"] == $scope.imgindex){
                cid++;
                $scope.loadChapter();
            }else {
                $scope.imgindex++;
            }
        }
    }).add({
        combo:'left',
        description: 'Previous Image/Chapter',
        callback: function() {
            if($scope.chapter["count"] == 0){
                cid--;
                $scope.loadChapter();
            }else {
                $scope.imgindex--;
            }
        }
    })
});