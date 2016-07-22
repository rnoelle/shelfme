angular.module('shelfme')
  .directive('bookInfo', function () {
      return {
        templateUrl: './js/directives/book-info.html',
        restrict: 'EA',
        scope: {
          book: '='
        },
        link: function (scope, element, attr) {
          scope.$watch('book', function () {
            if (scope.book) {
              scope.getBook(scope.book).then(function (response) {
                scope.thisBook = response;
                console.log(scope.thisBook);
              })
            }
          })

          scope.addBookToShelf = function (id) {
            scope.getBook(id).then(function (response) {
              scope.chosenBook = response;
              scope.chosenBook.id = id;
              scope.addBook(scope.chosenBook);
              element.append('<div class="added-alert">Added</div>');
              console.log('added');
            })
          }

        },
        controller: function ($scope, dataService) {
            $scope.getBook = dataService.getBook;
            $scope.addBook = dataService.addBook;
        }
      };
  });
