angular.module('shelfme')
  .directive('searchBooks', function () {
    return {
      templateUrl: './js/directives/search-books.html',
      restrict: 'EA',
      controller: function ($scope, dataService) {
          $scope.searchBooks = dataService.searchBooks;

          $scope.findResults = function(searchTerm) {
            $scope.searchBooks($scope.searchTerm).then(function (response) {
              $scope.results = response;
            });
          };

          $scope.selectBook = function (id) {
            
              $scope.book = id;
              console.log($scope.book);
          };
      },
      link: function (scope, element, attr) {

      }

    };
  });
