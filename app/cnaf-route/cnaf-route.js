(function () {
	'use strict';

	var app = angular.module('cnaf-route', ['ui.router']);

	app.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
		$locationProvider
			.html5Mode(true);


		var accueilState = {
			name: 'accueil',
			url: '/',
			templateUrl: 'cnaf-route/tmpl/accueil.html'
		};

		var produitState = {
			name: 'produit',
			url: '/produit',
			templateUrl: 'cnaf-route/tmpl/produit.html'
		};

		var serviceState = {
			name: 'service',
			url: '/service',
			templateUrl: 'cnaf-route/tmpl/service.html'
		};

		var contactState = {
			name: 'contact',
			url: '/contact',
			templateUrl: 'cnaf-route/tmpl/contact.html'
		};


		$stateProvider.state(accueilState);
		$stateProvider.state(produitState);
		$stateProvider.state(serviceState);
		$stateProvider.state(contactState);
	}]);


})();
