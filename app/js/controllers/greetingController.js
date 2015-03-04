
//rerference a module
app.controller('greetingController', function($scope, $interval, votingService, getTimeOfDay) {


	$scope.getVotes = votingService.getVotes;
	
	$scope.greeting = 'Good ' + getTimeOfDay() + ', Cisco!';



	var final = (new Date('29 March 2015')).getTime();

	$interval(function() {
		var now = (new Date()).getTime();
		$scope.timeLeft = (final - now) / 1000;
	}, 1000);
});
