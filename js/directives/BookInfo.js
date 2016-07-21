angular.module('shelfme')
  .directive('bookInfo', function () {
      return {
        templateUrl: 'book-info.html',
        scope: {
          bookId: '='
        },
        link: function (scope, element, attr) {

        },
        controller: function ($scope, dataService) {
          console.log("controlled");
          var rawBook = dataService.getBook();
          $scope.book = rawBook.volumeInfo;
        }
      };
  });
