angular.module('shelfme')
  .controller('recCtrl', function ($scope, dataService, $stateParams) {

    var book = $stateParams.bookId;
    console.log($stateParams);
    if($stateParams) {
      dataService.getBook(book).then(function (response) {
        $scope.book = response;
        dataService.searchGenre(response.categories[0]).then(function (response) {
          $scope.recommendations = response.items;
          console.log($scope.recommendations);
        });
      });
    }

    $scope.addBook = dataService.addBook;

  });
