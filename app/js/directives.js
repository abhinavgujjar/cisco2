app.directive('greeting', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/greeting.html',
		controller: 'greetingController'
	}
})

app.directive('homeNav', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/nav.html',
		controller: 'navController'
	}
})

app.directive('preview', function() {
	//return a directive definition object
	return {
		restrict: 'E',
		templateUrl: 'partials/preview.html',
		scope: {
			message: '=desc',
			rows: '@rows'
		}
	};

});


app.directive('carousel', function() {
	//return a directive definition object
	return {
		restrict: 'E',
		templateUrl: 'partials/carousel.html',
		controller: function($scope) {
			$scope.index = 0;

			$scope.next = function() {

				if ($scope.index < $scope.images.length) {
					$scope.index++;
				} else {
					$scope.index = 0;
				}

				$scope.selectedImage = $scope.images[$scope.index];
			}

			$scope.prev = function() {
				if ($scope.index > 0) {
					$scope.index--;
				} else {
					$scope.index = $scope.images.length;
				}

				$scope.selectedImage = $scope.images[$scope.index];
			}


		},
		scope: {
			images: '=',
			selectedImage: '='
		}
	};

});