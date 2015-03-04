app.factory('hotelsData', function(){

	

	return {
		getHotels : function(){
			return hotels;
		},
		addHotel : function(hotel){

			hotel.img = hotel.img || 'http://i.imgur.com/8kFwjSm.jpg';
			hotel.rating = hotel.rating || 1;

			hotels.push(hotel);
		}
	}

})