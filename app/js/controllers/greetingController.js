
//rerference a module
app.controller('greetingController', function($scope, $interval, timeService) {


	$scope.greeting = 'Good ' + timeService.getTimeOfDay() + ', Cisco!';

	var final = (new Date('29 March 2015')).getTime();

	$interval(function() {
		var now = (new Date()).getTime();
		$scope.timeLeft = (final - now) / 1000;
	}, 1000);
});
