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

  $scope.postFriend = function( friend ){
    $http.post('/friend', {
      friendName: friend
    }).
      then(function (response){

      }, function (response){
        // handle error
      })
  }

  $scope.getFriends = function(){
    $http.get('/friend/friends').
      then(function (response){
        $scope.friends = response.data.names;
      }, function (response){
      })
  }

  $scope.getFreeTimes = function(){
    $http.get('/feed/times').
      then(function (response){
        $scope.times = response.data.times
        //alert(printObject(response))
      }, function (response){
        //alert('ping')
      })
  }

  $interval(function(){ 
    $scope.getFreeTimes();
    $scope.getFriends();
  }, 3000)
}

function printObject(object){
	alert(JSON.stringify(object, null, 4))
}