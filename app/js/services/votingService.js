angular.module('voting', []).provider('votingService', function() {

	var _incrementBy = 1;


	this.setIncrement = function(increment){
		_incrementBy = increment
	}

	this.$get = function() {

		var votes = {
			number: 0
		}

		var votingService = {
			upVote: function(hotel) {
				hotel.rating += _incrementBy;
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


	}



});