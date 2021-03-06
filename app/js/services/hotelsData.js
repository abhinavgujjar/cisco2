app.factory('hotelsData', function($http, $q) {

	return {
		getHotels: function() {
			var deferred = $q.defer();

			$http.get('https://api.parse.com/1/classes/hotels', {
				headers: {
					'X-Parse-Application-Id': 'w80rujPK3FnLNUoXOQLZQqTOVCBLKQPcaYosen9w',
					'X-Parse-REST-API-Key': 'BAo98XptWm6R20zPNSxKAMv2I36WU0Mactxgs8LN'
				}
			}).success(function(data){
				deferred.resolve(data.results);
			});

			return deferred.promise;

		},
		addHotel: function(hotel) {


			hotel.img = hotel.img || 'http://i.imgur.com/8kFwjSm.jpg';
			hotel.rating = hotel.rating || 1;

			$http.post('https://api.parse.com/1/classes/hotels', hotel, {
				headers: {
					'X-Parse-Application-Id': 'w80rujPK3FnLNUoXOQLZQqTOVCBLKQPcaYosen9w',
					'X-Parse-REST-API-Key': 'BAo98XptWm6R20zPNSxKAMv2I36WU0Mactxgs8LN'
				}
			})
		}
	}

})