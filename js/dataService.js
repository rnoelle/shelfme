angular.module('shelfme')
  .service('dataService', function ($http, $q) {

    //Search and recommendation functions

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

    // Shelf Functions

    this.addBook = function (book) {
      var existingShelf = JSON.parse(localStorage.getItem('myShelf'));
      if(!existingShelf) {
        existingShelf = [];
      }
      existingShelf.push(book);
      localStorage.setItem('myShelf', JSON.stringify(existingShelf));
    };

    this.getShelf = function () {
      var shelf = JSON.parse(localStorage.getItem('myShelf'));
      return shelf;
    };

    this.removeTitle = function (id) {
      var existingShelf = JSON.parse(localStorage.getItem('myShelf'));
      for(var i = 0; i < existingShelf.length; i++) {
        console.log(existingShelf[i]);
        console.log(existingShelf[i].id);
        if (existingShelf[i].id === id) {
          existingShelf.splice(i, 1);
        }
      }
      localStorage.setItem('myShelf', JSON.stringify(existingShelf));
    };

  }); //end module
