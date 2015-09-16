/**
 * Created by Moritz Egger on 9/16/15.
 */
app.controller("nyiController", function ($scope,$stateParams) {
    $scope.getversion = function(){
        if($stateParams.version == '0.0'){
            $scope.version = "unknown";
        }else{
            $scope.version = $stateParams.version;
        }
    }
});