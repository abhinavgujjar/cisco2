app.controller('listingController', function($scope, uiconfig, votingService, hotelsData) {

	$scope.upVote = votingService.upVote;

	$scope.downVote = function(hotel) {
		votingService.downVote(hotel);
	};

	$scope.descLimit = uiconfig.descLimit;

	$scope.toggleMore = function(hotel) {
		hotel.showMore = !hotel.showMore;
	}

	$scope.loading = true;
	hotelsData.getHotels().then(function(data){
		$scope.hotels = data;
		$scope.loading = false;
	});

});