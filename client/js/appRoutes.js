angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'partials/home',
			controller: 'MainController'
		})

		.when('/list', {
			templateUrl: 'partials/list',
			controller: 'ListController'
		});

	$locationProvider.html5Mode(true);

  // by default, redirect to site root
  $routeProvider.otherwise({
      redirectTo:'/'
  });
}]);
