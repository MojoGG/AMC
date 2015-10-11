app.controller("mainController", function ($scope,settingsFactory,$rootScope) {
    $scope.getConfig = function(){
        $rootScope.settings = settingsFactory.getConfig();
    };
    $scope.helloworld = "Test Hello World";

    $scope.getStyle = function(){
        console.log('skin-'+$scope.settings["style"]["name"]);
        return 'skin-' + $scope.settings["style"]["name"];
    }
});