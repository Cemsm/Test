(function () {
'use strict';

  angular.module('myfirstApp', [])

  .controller('MyFirstController' , function ($scope) {
    $scope.name = "Amirhosein";
    $scope.sayhello = function (){
      return "hello boy"
    };

  });

})();
