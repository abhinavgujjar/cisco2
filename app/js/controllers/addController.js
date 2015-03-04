app.controller('addController', function($scope, uiconfig) {

	$scope.descLimit = uiconfig.descLimit;

	$scope.addHotel = function(hotel) {
		var newHotel = angular.copy(hotel);
		$scope.hotels.push(newHotel);

		$scope.newHotel = null;
	}

});
