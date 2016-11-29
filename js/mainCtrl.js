angular.module('shelfme')
  .controller('mainCtrl', function ($scope, $state, dataService) {
    $scope.login = "Login";
    $scope.logOut = function () {
      console.log('logging out');
      firebase.auth().signOut().then(function () {
        $('login').html('<div><h3>Login</h3></div>')
      })
    }
  });
