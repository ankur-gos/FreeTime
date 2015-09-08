var myApp = angular.module('signup', []);

myApp.controller('SignUpController', ['$scope', function($scope) {
	$scope.post.signup = $scope.email
	
	$scope.postRequest = function() {
		$http.post('http://www.myfreetime.io/api/signup', {email: $scope.post.signup}).
		then(function(response) {
			console.log(response)
		}, function(response) {
			console.log("not workingggg")
		});
	}
}]);