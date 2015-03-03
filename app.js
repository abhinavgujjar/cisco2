//declared a module
var app = angular.module('myApp', []);

function mcontroller($scope, $rootScope) {
	$scope.greeting = 'Good Afternoon, Cisco!!';
}

//rerference a module
app.controller('mainController', mcontroller);

app.controller('nestedController',
	function($scope, $rootScope) {
		$rootScope.greeting = "OLA!";
	}
)

app.controller('secondController',
	function($scope) {
		//$scope.greeting = "I am second!";
	}
)