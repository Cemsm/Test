(function () {
'use strict';

  angular.module('myfirstApp', [])

  .controller('MyFirstController' , function ($scope) {
    $scope.name = "Amirhosein";
    $scope.hi = "Hi {{name}}"
    $scope.sayhello = function (){
      return "hello boy"
    };

  });

})();
