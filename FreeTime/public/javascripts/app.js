'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('myApp', []);

app.controller('HomeController', HomeController);
app.controller('InputController', InputController)
app.controller('DisplayController', DisplayController)

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

function InputController($scope, $http, $window, $interval){

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

  $scope.getFreeTimes = function(){
    $http.get('/feed/times').
      then(function (response){
        $scope.firstTime = response.data.starts[0]
        $scope.endTime = response.data.ends[0]
        //alert(printObject(response))
      }, function (response){
        //alert('ping')
      })
  }

  $interval(function(){ 
    $scope.getFreeTimes();
  }, 3000)
}

function printObject(object){
	alert(JSON.stringify(object, null, 4))
}