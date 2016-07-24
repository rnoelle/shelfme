angular.module('shelfme')
  .controller('shelfCtrl', function ($scope, dataService) {

    $scope.getShelf = function () {
      $scope.shelf = dataService.getShelf();

    };
    $scope.getShelf();

    $scope.removeTitle = function (id) {
      console.log(id);
      dataService.removeTitle(id);
      $scope.getShelf();
    };
    $scope.selectBook = function (id) {
        $scope.book = id;
        console.log($scope.book);
    };
    $scope.resetModal = function () {
      $scope.book = '';
      $scope.chosenBook = '';
      $('.added-alert').remove();
      $('.add-button').removeAttr('disabled');
    }
  });
