myApp.controller('UserController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  // This happens after view/controller loads -- not ideal
  console.log('checking user');
  $scope.currentSkill = {};
  $scope.skillz = [];


  $http.get('/user').then(function(response) {
      if(response.data.username) {
          $scope.userName = response.data.username;
          console.log('User Data: ', $scope.userName);
      } else {
          $location.path("/home");
      }
  });

  $scope.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };

  $scope.submitNewSkill = function () {
  var data = $scope.currentSkill;
  console.log(data);
  $http.post('/skillz', data)
    .then(function () {
      console.log('POST /skillz');
      getSkills();
    });
   };

   function getSkills() {
   $http.get('/skillz')
    .then(function (response) {
      console.log(response.data);
      response.data.forEach(function (skill) {
      });

      $scope.skillz = response.data;
      console.log('GET /skillz ', response.data);

    });
}

}]);
