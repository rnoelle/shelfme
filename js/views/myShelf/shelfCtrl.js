angular.module('shelfme')
  .controller('shelfCtrl', function ($scope, dataService, $firebaseArray) {

    var ref = firebase.database().ref().child("books");
    $scope.shelf = $firebaseObject(ref);

    $scope.removeTitle = function (id) {
        $scope.shelf.$remove()
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
