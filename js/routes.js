angular.module('shelfme')
  .config(function ($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/js/views/home/homeTmpl.html',
        controller: '/js/views/home/homeCtrl.js'
      })
      .state('search', {
        url: '/search',
        templateUrl: '/js/views/search/searchTmpl.html',
        controller: '/js/views/search/searchCtrl.js'
      })
      .state('myShelf', {
        url: '/my-shelf',
        templateUrl: '/js/views/myShelf/shelfTmpl.html',
        controller: '/js/views/myShelf/shelfCtrl.js'
      });
  });
