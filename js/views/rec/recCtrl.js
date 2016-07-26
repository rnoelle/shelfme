angular.module('shelfme')
  .controller('recCtrl', function ($scope, dataService, $stateParams) {

    var book = $stateParams.bookId;
    console.log($stateParams);
    if($stateParams) {
      dataService.getBook(book).then(function (response) {
        $scope.baseBook = response;
        if(response.volumeInfo.categories) {
          dataService.searchGenre(response.volumeInfo.categories[0]).then(function (response) {
            if (response.items) {
              $scope.recommendations = response.items;
            } else {
              $scope.recommendations = [];
              $scope.recommendations[0] = {};
              $scope.recommendations[0].volumeInfo = {};
              $scope.recommendations[0].volumeInfo.title = "Sorry, no recommendations found.";
            }
          });
        } else {
          $scope.recommendations = [];
          $scope.recommendations[0] = {};
          $scope.recommendations[0].volumeInfo = {};
          $scope.recommendations[0].volumeInfo.title = "Sorry, no recommendations found.";
        }
          });
      }

    $scope.selectBook = function (id) {

        $scope.book = id;
        console.log($scope.book);
    };


    $scope.addBook = dataService.addBook;

    $('#your-modal-id').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  });
