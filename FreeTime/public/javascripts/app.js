'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('myApp', []);

app.controller('HomeController', HomeController);
app.controller('InputController', InputController)

function HomeController($scope, $http){
  $scope.postEmail = function(email){
    $http.post('/signup', { email: email }).
    	then(function (response){
    		alert(response);
    	}, function (response){
    		alert(response);
    	});
  }

  $scope.postLogin = function (login){
    $http.post('/login', { login: login }).
      then(function (response){
        alert(response);
      }, function (response){
        alert(response);
      });
  }
}

function InputController($scope, $http){
	$scope.printTime = function(time){
		alert(JSON.stringify(time));
	}

	$scope.postTime = function(time){
		$http.post('/')
	}
}

function printObject(object){
	alert(JSON.stringify(object, null, 4))
}