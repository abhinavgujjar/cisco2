//declared a module
var app = angular.module('myApp', []);

//rerference a module
app.controller('mainController',function($scope, $rootScope) {
		
		$scope.greeting = 'Good Afternoon, Cisco!!';
	}
);