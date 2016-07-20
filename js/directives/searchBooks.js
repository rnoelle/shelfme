angular.module('shelfme')
  .directive('searchBooks', function () {
    return {
      templateUrl: './js/directives/search-books.html',
      restrict: 'EA',
      scope: {
        searchTerm: '='
      },
      controller: function ($scope, dataService) {

      },
      link: function (scope, element, attr) {

      }

    };
  });
