'use strict';

angular.module('try').
	config(
		function(
			$locationProvider,
			$routeProvider
			){
			$locationProvider.html5Mode({
				enabled:true
			})
			
			$routeProvider.
				when("/",{
					template: "<blog-list></blog-list><p><a href='/about'>About</a></p>"
				}).
				when("/about",{
					templateUrl: "templates/about.html"
				}).
				when("/blog/:id/",{
					template:"<blog-detail></blog-detail>"
				}).
				// when("/blog/2",{
				// 	template:"<blog-list></blog-list>"
				// }).
				// when("/blog/3",{
				// 	template:"<h1>FOO</h1>"
				// }).
				// when("/blog/4",{
				// 	template:"<h1>BAR</h1>"
				// }).
				otherwise({
					template:"Not found"
				})
						
	});
