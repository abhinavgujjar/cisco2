app.directive('greeting', function(){
	return {
		restrict : 'E',
		templateUrl : 'partials/greeting.html',
		controller : 'greetingController'
	}
})

app.directive('homeNav', function(){
	return {
		restrict : 'E',
		templateUrl : 'partials/nav.html',
		controller : 'navController'
	}
})

app.directive('preview', function() {
    //return a directive definition object
    return {
        restrict: 'E',
        templateUrl: 'partials/preview.html',
        scope: {
        	
        }
    };

});
