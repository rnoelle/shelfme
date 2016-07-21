angular.module('shelfme')
  .directive('searchBooks', function () {
    return {
      templateUrl: './js/directives/search-books.html',
      restrict: 'EA',
      scope: {
        findResults: '&'
      },
      controller: function ($scope, dataService) {
          $scope.searchBooks = dataService.searchBooks;

          $scope.findResults = function(searchTerm) {
            $scope.searchBooks($scope.searchTerm).then(function (response) {
              $scope.results = response;
            });
          };

      },
      link: function (scope, element, attr) {
        scope.popup = function () {
        
        };
      }

    };
  });
