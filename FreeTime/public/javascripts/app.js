'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('myApp', []);

app.controller('HomeController', HomeController);

function HomeController($scope, $http){
  $scope.postEmail = function(){
    $http.post
  }
}