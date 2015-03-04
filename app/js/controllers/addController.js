app.controller('addController', ["$scope", "uiconfig", "hotelsData", function($scope, uiconfig, hotelsData) {

	$scope.descLimit = uiconfig.descLimit;

	$scope.addHotel = function(hotel) {
		var newHotel = angular.copy(hotel);
		hotelsData.addHotel(newHotel);

		$scope.newHotel = null;
	}

}]);
