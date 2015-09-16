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
        }).state('reader',{
            url:'/reader?mid&cid',
            templateUrl: './view/reader.html',
            controller:'readerController',
            params:{
                mid:'0',
                cid:'0'
            }
        }).state('nyi',{
            url:'/nyi?version',
            templateUrl: './view/nyi.html',
            controller:'nyiController',
            params:{
                version:'0.0'
            }
        })

    $urlRouterProvider.otherwise("/");
});