angular.module('shelfme')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/views/home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'js/views/search/searchTmpl.html',
        controller: 'searchCtrl'
      })
      .state('recommend', {
        url: '/recommend/:bookId',
        templateUrl: 'js/views/rec/recTmpl.html',
        controller: 'recCtrl'
      })
      .state('myShelf', {
        url: '/my-shelf',
        templateUrl: 'js/views/myShelf/shelfTmpl.html',
        controller: 'shelfCtrl'
      });

      $urlRouterProvider.otherwise('/');
  });
