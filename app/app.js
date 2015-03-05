//declared a module
var app = angular.module('myApp', ['time', 'ngRoute', 'voting', 'ngSanitize']);

//'$route' service

app.controller('mainCtrl', function($scope){

	$scope.inputA = 'This  is Input A';
	$scope.inputB = 'This  is Input B';
})

app.config(function($routeProvider, votingServiceProvider) {

	votingServiceProvider.setIncrement(15);

	$routeProvider.when('/home', {
		templateUrl: 'partials/home.html'
	});

	$routeProvider.when('/listing', {
		templateUrl: 'partials/listing.html'
	});

	$routeProvider.when('/new', {
		templateUrl: 'partials/new.html',
		controller : 'addController'
	});

	$routeProvider.otherwise({
		redirectTo : '/home'
	})

})

app.value('uiconfig', {
	descLimit: 200,
	numItems: 10,
	incrementBy: 5
});

