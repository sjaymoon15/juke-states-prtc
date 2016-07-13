'use strict';

var juke = angular.module('juke', ['ui.router'])

juke.config(function($stateProvider){
	$stateProvider.state("something", {
		template: '<img src="http://fillmurray.com/100/100">',
		url: '/hello'
	});
});
