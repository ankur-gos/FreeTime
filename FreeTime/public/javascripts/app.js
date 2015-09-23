'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('myApp', []);

app.controller('HomeController', HomeController);
app.controller('InputController', InputController)

function HomeController($scope, $http){
  $scope.postEmail = function(email){
    $http.post('/signup', { email: email }).
    	then(function (response){
    		printObject(response);
    	}, function (response){
    		printObject(response);
    	});
  }

  $scope.postLogin = function (login){
    $http.post('/login', { login: login }).
      then(function (response){
        printObject(response);
      }, function (response){
        printObject(response);
      });
  }
}

function InputController($scope, $http, $window){
  
	$scope.printTime = function(time){
		alert(JSON.stringify(time));
	}

	$scope.postTime = function(time){
		$http.post('/feed', { 
      start: time.start,
      end: time.end,
      date: time.date
    }).
      then(function (response){
        printObject(response);
      }, function(response){
        printObject(response)
      });
	}

  $scope.logout = function(){
    $http.get('/logout').
      then(function (response){
        $window.location.href = '/';
        //printObject(response);
      }, function (response){
        //printObject(response);
      });
  }
}

function printObject(object){
	alert(JSON.stringify(object, null, 4))
}