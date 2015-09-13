app.config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('/', {
            url:'/',
            templateUrl: './view/home.html',
            controller: 'homeController'
        }).state('about', {
            url:'/about',
            templateUrl: './view/about.html',
            controller: 'aboutController'
        })

    $urlRouterProvider.otherwise("/");
});