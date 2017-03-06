(function() {
	'use strict';

	var app = angular.module('main', []);

	app.directive('cafHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/caf-header.html'
		};
	});


	app.directive('cafBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/caf-body.html'
		};
	});


	app.directive('cafFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/caf-footer.html'
		};
	});


})();
