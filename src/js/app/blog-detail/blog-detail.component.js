'use strict';

//component

angular.module('blogDetail').
	component('blogDetail',{
		// template:'<div ><h1 class="new-class">{{ title }}</h1><button ng-click="Test()">Click me!</button></div>',
		templateUrl:'/templates/blog-detail.html',
		controller:function($location,$routeParams, $scope){
			var Items = [
			{title:"Some title", id:1, desc:"This is a Book"},
				{title:"No title", id:2, desc:"This to is a Book"},
					{title:"Some title1", id:3, desc:"This too is a Book"},
						{title:"Some title2", id:4, desc:"This is yet another Book"},
						]
			 
			console.log($routeParams)
			$scope.title = "Blog "+$routeParams.id
			$scope.notfound=true
			angular.forEach(Items, function(post){
				// console.log(post)
				if (post.id==$routeParams.id){
					$scope.notfound=false	
					$scope.post=post

				}


			})
			if ($scope.notfound){
				console.log("Not found")
				// $location.path("/404")
				$location.path("/")
			}
		}
});