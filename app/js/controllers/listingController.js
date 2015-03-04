app.controller('listingController', function($scope, uiconfig, votingService, hotelsData) {

	$scope.upVote = votingService.upVote;

	$scope.downVote = function(hotel) {
		votingService.downVote(hotel);
	};

	$scope.descLimit = uiconfig.descLimit;

	$scope.toggleMore = function(hotel) {
		hotel.showMore = !hotel.showMore;
	}

	hotelsData.getHotels(function(data){
		$scope.hotels = data;
	});

});