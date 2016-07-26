angular.module('shelfme')
  .controller('shelfCtrl', function ($scope, dataService) {

    $scope.getShelf = function () {
      $scope.shelf = dataService.getShelf();

    };
    $scope.getShelf();

    $scope.removeTitle = function (id) {
        dataService.removeTitle(id);
        $scope.getShelf();
    };
    $scope.selectBook = function (id) {
        $scope.book = id;
    };
    $scope.$watch('book', function () {
      $scope.thisBook = {};
      if ($scope.book) {
        dataService.getBook($scope.book).then(function (response) {
          $scope.thisBook = response;
        });
      }
    });
  });
