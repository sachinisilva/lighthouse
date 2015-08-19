(function(angular) {
  'use strict';
var myApp = angular.module('addressApp',['ngRoute']);

myApp.config(function($routeProvider, $locationProvider, $httpProvider)
{

    

  $routeProvider

  .when('/',{

    templateUrl:'view/adressbook.html',
    controller:'addressController'
  })

  


})

 


myApp.controller('addressController',function($scope,$http){
    

    $scope.searchcontact=function searchcontact(contact){
      
      
      $http.get("/showcontact/"+contact.tp).success(function(response){

      $scope.details=response;

    
      
    
      });

    }

    $scope.addcontact=function addcontact(newcontact){
      
    
      $http.post("/addcontact",newcontact).success(function(response){
      $scope.rescontact=response;
      
    
      });

    }

    $scope.removecontact=function removecontact(details){
      
      
      $http.delete("/removecontact/"+details.respond[0]._id).success(function(response){
      $scope.details=response;
      document.getElementById('details').style.visibility = "visible";
    
      
    
      });

    }





});




})(window.angular);



