//declared a module
var app = angular.module('myApp', []);

app.value('uiconfig', {
	descLimit: 200,
	numItems: 10,
	incrementBy: 5
});


app.factory('votingService',

	function(uiconfig) {

		var votes = {
			number: 0
		}

		var votingService = {
			upVote: function(hotel) {
				hotel.rating += uiconfig.incrementBy;
				votes.number++;
			},
			downVote: function(hotel) {
				if (hotel.rating > 0) {
					hotel.rating--;
				}
				votes.number++;
			},
			getVotes: function() {
				return votes.number;
			}
		};

		return votingService;

	})


app.factory('getTimeOfDay', function() {

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

	
})