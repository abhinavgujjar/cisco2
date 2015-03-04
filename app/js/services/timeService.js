angular.module('time', []);

angular.module('time').factory('timeService', function() {

	function getTimeOfDay(){
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

			return timeOfDay;

	}

	return  {
		getTimeOfDay: getTimeOfDay
	}

	
});