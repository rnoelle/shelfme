angular.module('shelfme')
  .directive('searchBooks', function () {
    return {
      templateUrl: 'js/directives/search-books.html',
      restrict: 'EA',
      controller: function ($scope, dataService) {
          $scope.searchBooks = dataService.searchBooks;

          $scope.findResults = function(searchTerm) {
            $scope.loadLoad();
            $scope.searchBooks($scope.searchTerm).then(function (response) {
              $scope.results = response;
              $scope.unloadLoad();
            });
          };

          $scope.selectBook = function (id) {

              $scope.book = id;
          };
      },
      link: function (scope, element, attr) {
        scope.loadLoad = function() {
          $('#load-screen').removeClass();
          console.log('ran');
        }
        scope.unloadLoad = function () {
          $('#load-screen').addClass('invisible');
        }

      }

    };
  });
