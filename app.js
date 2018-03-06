(function () {
'use strict';

  angular.module('myfirstApp', [])

  .controller('MyFirstController' , function ($scope) {
    $scope.name = "Khashayar Davoodi";
    $scope.hi = "Hi {{name}}"
    $scope.sayhello = function (){
      return "hello boy"
    };

  });

})();
