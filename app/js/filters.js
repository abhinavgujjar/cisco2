
app.filter('xcon', function() {

	//should return anotherfunction taht will be applied for each value
	return function(input) {
		return input / 50;
	}

})

app.filter('na', function() {

	//should return anotherfunction taht will be applied for each value
	return function(input) {
		return input || 'NA';
	}

})

app.filter('regionalize', function() {

	//should return anotherfunction taht will be applied for each value
	return function(input) {
		return input.replace('Bangalore', 'Bengaluru');
	}

})

