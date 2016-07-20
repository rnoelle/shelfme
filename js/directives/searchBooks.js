angular.module('shelfme')
  .directive('searchBooks', function () {
    return {
      templateUrl: './js/directives/search-books.html',
      restrict: 'EA',
      scope: {
        searchTerm: '='
      },
      controller: function ($scope, dataService) {
          $scope.searchBooks = dataService.searchBooks;
          $scope.results = $scope.searchBooks($scope.searchTerm);
      },
      link: function (scope, element, attr) {

      }

    };
  });
