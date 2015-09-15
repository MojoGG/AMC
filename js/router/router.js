app.config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('/', {
            url:'/',
            templateUrl: './view/home.html',
            controller: 'homeController'
        }).state('manga',{
            url:'/manga?mid',
            templateUrl: './view/singleManga.html',
            controller:'singleMangaController'
        });

    $urlRouterProvider.otherwise("/");
});