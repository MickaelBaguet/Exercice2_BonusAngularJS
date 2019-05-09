// Création d'un module angular du nom 'myapp'
var app = angular.module('myapp', []);
// Création d'un controller 'MyController'
app.controller('MyController', function($scope) {
    $scope.clickMe= function(){
         alert("ALEEEERRRTTEEEE !!!");
   }
});
