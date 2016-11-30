angular.module('shelfme')
  .controller('mainCtrl', function ($scope, $state, dataService) {
    $scope.login = "Login";
    $scope.checkUser = function () {
      if (firebase.auth().currentUser) {
        return 'dropdown-menu';
      } else {
        return 'hidden-hack';
      }
    }
    $scope.logOut = function () {
      console.log('logging out');
      firebase.auth().signOut().then(function () {
        $('login').html('<div>Login</div>')
      })
    }
  });
