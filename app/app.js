'use strict';

require('angular/angular.js');
require('angular-ui-router');
require('angular-spinner');
require('./cnaf-route/cnaf-route.js');

var cafHeaderUrl = require('./tmpl/caf-header.html');
var cafBodyUrl = require('./tmpl/caf-body.html');
var cafFooterUrl = require('./tmpl/caf-footer.html');

var app = angular.module('main', ['cnaf-route', 'angularSpinner']);

app.directive('cafHeader', function() {
	return {
		restrict: 'E',
		templateUrl: cafHeaderUrl
	};
});


app.directive('cafBody', function() {
	return {
		restrict: 'E',
		templateUrl: cafBodyUrl
	};
});


app.directive('cafFooter', function() {
	return {
		restrict: 'E',
		templateUrl: cafFooterUrl
	};
});



