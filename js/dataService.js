angular.module('shelfme')
  .service('dataService', function ($http) {

    this.searchBooks = function (searchTerm) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&key=AIzaSyBIGIJyHF8vEx7bhHWdx6nw1T1mdUqc_tU'
      });
    };
  }); //end module
