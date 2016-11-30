angular.module('shelfme')
  .directive('login', function() {
    return {
      restrict: 'E',
      templateUrl: './js/directives/login.html',
      link: function(scope, element, attr) {
        if (firebase.auth().currentUser) {
          var user = firebase.auth().currentUser;
          console.log('already logged in');
          element.find('div').html('<img src="' + user.$.src.photoURL + '">');
        }

        element.on('click', function() {
          var provider = new firebase.auth.GoogleAuthProvider();

          if (!firebase.auth().currentUser) {
            firebase.auth().signInWithPopup(provider).then(function(result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;
              element.find('div').html('<img src="' + user.$.src.photoURL + '">');
              scope.dropdown = 'dropdown';
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              console.log(errorMessage);
            });
          }
        })
      }
    }
  })
