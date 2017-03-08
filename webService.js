var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/s1', function (req, res, next) {
	setTimeout(function() {
		next();
	}, 2000);
});

router.get('/s2', function (req, res, next) {
	setTimeout(function() {
		next();
	}, 1000);
});

router.get('/s3', function (req, res, next) {
	setTimeout(function() {
		next();
	}, 4000);
});

router.get('/s4', function (req, res, next) {
	setTimeout(function() {
		next();
	}, 3000);
});

router.get('/s5', function (req, res, next) {
	setTimeout(function() {
		next();
	}, 2000);
});
