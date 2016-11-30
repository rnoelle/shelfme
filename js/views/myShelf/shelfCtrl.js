angular.module('shelfme')
  .controller('shelfCtrl', function ($scope, dataService, $firebaseArray) {
    var id = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref().child("books/" + id);
    $scope.shelf = $firebaseArray(ref);
    console.log($scope.shelf);

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
