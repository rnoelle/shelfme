angular.module('shelfme')
  .service('dataService', function ($http, $q) {

    //Search and recommendation functions

    this.searchBooks = function (searchTerm) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&key=AIzaSyBIGIJyHF8vEx7bhHWdx6nw1T1mdUqc_tU'
      }).then(function (response) {
        return response.data;
      });
    };

    this.getBook = function (bookId) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes/' + bookId,
      }).then(function (response) {
        return response.data;
      });
    };

    this.searchGenre = function (category) {
      var splitCategory = category.split(' ');
      for (var i = 0; i < splitCategory.length; i++) {
        if (splitCategory[i] == '/') {
          splitCategory.splice(i, 1);
        }
        var updatedCategory = splitCategory.join(' ');
      }
      console.log(updatedCategory);
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=+subject' + updatedCategory + '&filter=paid-ebooks&key=AIzaSyBIGIJyHF8vEx7bhHWdx6nw1T1mdUqc_tU'
      }).then(function (response) {
        console.log(response.data);
        return response.data;
      });
    };

    // Shelf Functions

    this.addBook = function (book) {
      var existingShelf = JSON.parse(localStorage.getItem('myShelf'));
      var doNotAdd = false;
      if(!existingShelf) {
        existingShelf = [];
      }
      for(var j = 0; j < existingShelf.length; j++) {
        if (existingShelf[j].id == book.id) {
          doNotAdd = true;
        }
      }
      if(!doNotAdd) {
        existingShelf.push(book);
        localStorage.setItem('myShelf', JSON.stringify(existingShelf));
      }
    };

    this.getShelf = function () {
      var shelf = JSON.parse(localStorage.getItem('myShelf'));
      return shelf;
    };

    this.removeTitle = function (id) {
      var existingShelf = JSON.parse(localStorage.getItem('myShelf'));
      for(var i = 0; i < existingShelf.length; i++) {
        if (existingShelf[i].id === id) {
          existingShelf.splice(i, 1);
        }
      } console.log('removed');
      localStorage.setItem('myShelf', JSON.stringify(existingShelf));
    };

  }); //end module
