'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('myApp', []);

app.controller('HomeController', HomeController);

function HomeController($scope, $http){
  $scope.postEmail = function(email){
    $http.post('/signup', {email: email}).
    	then(function(response){
    		alert(response)
    	}, function(response){
    		alert(response)
    	});
  }
}