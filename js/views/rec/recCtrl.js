angular.module('shelfme')
  .controller('recCtrl', function ($scope, dataService, $stateParams) {

    var book = $stateParams.bookId;
    console.log($stateParams);
    if($stateParams) {
      dataService.getBook(book).then(function (response) {
        $scope.baseBook = response;
        dataService.searchGenre(response.volumeInfo.categories[0]).then(function (response) {
          $scope.recommendations = response.items;
          console.log($scope.recommendations);
        });
      });
    }
    $scope.selectBook = function (id) {

        $scope.book = id;
        console.log($scope.book);
    };
    $scope.addBook = dataService.addBook;

  });
