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

    //how to remove from Ctrl?
    $scope.resetModal = function () {
      scope.book = '';
      scope.chosenBook = '';
      $('.added-alert').remove();
      $('.add-button').removeAttr('disabled');
    }

    $('#your-modal-id').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  });
