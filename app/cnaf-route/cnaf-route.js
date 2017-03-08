'use strict';

var accueilUrl = require('./tmpl/accueil.html');
var produitUrl = require('./tmpl/produit.html');
var serviceUrl = require('./tmpl/service.html');
var contactUrl = require('./tmpl/contact.html');

var app = angular.module('cnaf-route', ['ui.router']);

app.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
	$locationProvider
		.html5Mode(true);


	const accueilState = {
		name: 'accueil',
		url: '/',
		templateUrl: accueilUrl
	};

	let produitState = {
		name: 'produit',
		url: '/produit',
		templateUrl: produitUrl,
		controller: 'ProductCtrl'
	};

	var serviceState = {
		name: 'service',
		url: '/service',
		templateUrl: serviceUrl
	};

	var contactState = {
		name: 'contact',
		url: '/contact',
		templateUrl: contactUrl
	};


	$stateProvider.state(accueilState);
	$stateProvider.state(produitState);
	$stateProvider.state(serviceState);
	$stateProvider.state(contactState);
}]);

app.controller('ProductCtrl', ['$log', '$http', '$q','$rootScope', function($log, $http, $q, $rootScope) {
	$log.debug('ProductCtrl', arguments);
	var x = [1, 2, 3];
	x.forEach((n, i) => {
		console.log('n i', n, i);
	});
	$http.get('../ws/s1').then(function(response) {
		console.log('response', response);
		$rootScope.showSpinner = true;
		return $q.all([
			$http.get('../ws/s2'), 
			$http.get('../ws/s3'), 
			$http.get('../ws/s4')]);
	}).then((responses) => {
		console.log('responses', responses);
		return $http.get('../ws/s5');
	}).then(function(response) {
		console.log('response', response);	
	}).finally(function() {
		$rootScope.showSpinner = false;
	}).catch(function(error) {
		console.error('error', error);
	});
	
}]);

