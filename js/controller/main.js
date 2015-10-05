app.controller("mainController", function ($scope,settingsFactory,$rootScope) {
    $rootScope.settings = {
        "style":{
            "name":"red",
            "path":"./plugins/AdminLTE/dist/css/skins/_all-skins.min.css"
        }
    };
    $scope.getConfig = function(){
        $rootScope.settings = settingsFactory.getConfig();
        console.log($scope.settings["style"]["path"]);
        console.log($scope.settings["style"]["name"]);
    }
    $scope.helloworld = "Test Hello World";

    $scope.getStyle = function(){
        console.log('skin-'+$scope.settings["style"]["name"]);
        return 'skin-' + $scope.settings["style"]["name"];
    }
});