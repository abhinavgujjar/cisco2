app.factory('hotelsData', function($http) {



	return {
		getHotels: function() {

			$http.get('data/hotels').success(
				function(data) {
				return data;
				
			}).error(function() {
				alert('error');
			});

		},
		addHotel: function(hotel) {

			hotel.img = hotel.img || 'http://i.imgur.com/8kFwjSm.jpg';
			hotel.rating = hotel.rating || 1;

			hotels.push(hotel);
		}
	}

})