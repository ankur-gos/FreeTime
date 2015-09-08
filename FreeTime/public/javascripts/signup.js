var myApp = angular.module('signup', []);

myApp.controller('SignUpController', ['$scope', function($scope) {
	$scope.post.signup = $scope.email
	
	$scope.postRequest = function() {
		$http.post('http://52.25.145.199/api/signup', {email: $scope.post.signup}).
		then(function(response) {
			console.log(response)
		}, function(response) {
			console.log("not workingggg")
		});
	}
}]);