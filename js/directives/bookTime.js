angular.module('shelfme')
  .directive('bookInfo', function () {
      return {
        templateUrl: 'js/directives/book-info.html',
        restrict: 'EA',
        link: function (scope, element, attr) {

          scope.addBookToShelf = function () {
              scope.addBook(scope.thisBook);
              element.append('<div class="added-alert">Added</div>');
              $('.add-button').attr('disabled', 'true');
              $('.add-button').addClass('disabled-button');
            }

          $('.close').click(function() {
            // scope.thisBook = {};
            $('.added-alert').remove();
            $('.add-button').removeAttr('disabled');
            $('.add-button').removeClass('disabled-button');
          })
        },
        controller: function ($scope, dataService, $firebaseArray) {
            var id = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref('books/' + id);
            $scope.data = $firebaseArray(ref);

            $scope.addBook = function (book) {
              $scope.data.$add(book)
            }
        }
      };
  });
