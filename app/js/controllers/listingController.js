app.controller('listingController', function($scope, uiconfig, votingService, hotelsData,
	$http) {

	$scope.upVote = votingService.upVote;

	$scope.downVote = function(hotel) {
		votingService.downVote(hotel);
	};

	$scope.descLimit = uiconfig.descLimit;

	$scope.toggleMore = function(hotel) {
		hotel.showMore = !hotel.showMore;
	}

	var promise = $http({
		url: 'http://localhost:7400/app/data/hotels',
		method: 'GET'
	});

	promise.success(

		function(data) {
			$scope.hotels = data;
		}

	);

	promise.error(function(){
		alert('error');
	})

});