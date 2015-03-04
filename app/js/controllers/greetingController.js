
//rerference a module
app.controller('greetingController', function($scope, $interval) {

	var hours = (new Date()).getHours();
	var timeOfDay = 'Morning';
	if (hours > 12) {
		timeOfDay = 'Afternoon'
	}

	if (hours > 16) {
		timeOfDay = 'Evening'
	}

	if (hours > 20) {
		timeOfDay = 'Night'
	}

	$scope.greeting = 'Good ' + timeOfDay + ', Cisco!';



	var final = (new Date('29 March 2015')).getTime();

	$interval(function() {
		var now = (new Date()).getTime();
		$scope.timeLeft = (final - now) / 1000;
	}, 1000);
});
