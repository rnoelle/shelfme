angular.module('shelfme')
  .service('dataService', function ($http) {

    this.searchBooks = function (searchTerm) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&key=AIzaSyBIGIJyHF8vEx7bhHWdx6nw1T1mdUqc_tU'
      }).then(function (response) {
        console.log(response);
        return response.data;
      });
    };

    this.getBook = function (bookId) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes/' + bookId,
      }).then(function (response) {
        return response.data.volumeInfo;
      });
    };

    this.searchGenre = function (category) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=+subject' + category + '&key=AIzaSyBIGIJyHF8vEx7bhHWdx6nw1T1mdUqc_tU'
      }).then(function (response) {
        console.log(response);
        return response.data;
      });
    };

  }); //end module
