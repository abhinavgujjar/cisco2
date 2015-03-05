app.controller('addController', ["$scope", "uiconfig", "hotelsData", '$location',

	function($scope, uiconfig, hotelsData, $location) {

	$scope.descLimit = uiconfig.descLimit;

	$scope.images = ["http://i.imgur.com/dmlhhkU.jpg",
		"http://i.imgur.com/S54M0bj.jpg",
		"http://i.imgur.com/hZg00lq.jpg",
		"http://i.imgur.com/1jD7lgN.jpg",
		"http://i.imgur.com/U0KoJxh.jpg",
		"http://i.imgur.com/amBtxWl.jpg",
		"http://i.imgur.com/QhVORNH.jpg",
		"http://i.imgur.com/QhVORNH.jpg",
		"http://i.imgur.com/BIBuk43.jpg",
		"http://i.imgur.com/QezaFg8.jpg",
		"http://i.imgur.com/mOja8KJ.jpg",
		"http://i.imgur.com/7lSnfvh.jpg",
		"http://i.imgur.com/Fq4cFeQ.jpg",
		"http://i.imgur.com/3P9IDTF.jpg",
		"http://i.imgur.com/QhNZdjf.jpg",
		"http://i.imgur.com/o3sfWer.jpg",
		"http://i.imgur.com/G9qKSJU.jpg",
		"http://i.imgur.com/FfNahV4.jpg",
		"http://i.imgur.com/OGLIG3N.jpg"
	];

	$scope.index = 0;

	$scope.next = function() {

		if ($scope.index < $scope.images.length) {
			$scope.index++;
		} else {
			$scope.index = 0;
		}
	}

	$scope.prev = function() {
		if ($scope.index > 0) {
			$scope.index--;
		} else {
			$scope.index = $scope.images.length;
		}
	}



	$scope.addHotel = function(hotel) {

		if ($scope.hotelForm.$valid) {

			var newHotel = angular.copy(hotel);
			newHotel.img = $scope.images[$scope.index];
			hotelsData.addHotel(newHotel);

			$location.url('/listing');


			$scope.newHotel = null;
		} else {
			alert('Invalid !');
		}
	}

}]);