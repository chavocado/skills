myApp.controller('UserController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  // This happens after view/controller loads -- not ideal
  console.log('checking user');
  $scope.currentSkill = {};
  $scope.skillz = [];
  $scope.user_id= {};
  getUser();

  function getUser() {
  $http.get('/user').then(function(response) {
        if(response.data.username) {
            $scope.userName = response.data.username;
            $scope.user_id = response.data._id;
            $scope.skillz = response.data.skills;
            console.log('User Data: ', $scope.userName);
        } else {
            $location.path("/home");
        }
    });
  }


  $scope.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };

  $scope.submitNewSkill = function (id) {
  var data = $scope.currentSkill;
  console.log(data);
  $http.put('/skillz/' + id , data)
    .then(function (response) {
      console.log('PUT /skillz', data);
      getUser();
    });
   };

//    function getSkills() {
//    $http.get('/skillz')
//     .then(function (response) {
//       console.log(response.data);
//       response.data.forEach(function (skill) {
//       });
//
//       $scope.skillz = response.data;
//       console.log('GET /skillz ', response.data);
//
//     });
// }

}]);
