'use strict';
// controller
// angular.module('blogList').
// 	controller('BlogListController', function($scope){
// 		console.log("hello")
// 		$scope.title = 'Hi there'
// 		$scope.clicks=0
// 		$scope.Test = function(){
// 			console.log("Clicked")
// 			//$scope.title = 'Clicked'
// 			$scope.clicks+=1
// 			$scope.title = 'Clicked ' + $scope.clicks + ' times'
// 		}
// 	});

//component

angular.module('blogList').
	component('blogList',{
		// template:'<div ><h1 class="new-class">{{ title }}</h1><button ng-click="Test()">Click me!</button></div>',
		templateUrl:'/templates/blog-list.html',
		controller:function($scope){
			var Items = [
			{title:"Some title", id:1, desc:"This is a Book"},
				{title:"No title", id:2, desc:"This to is a Book"},
					{title:"Some title1", id:3, desc:"This too is a Book"},
						{title:"Some title2", id:4, desc:"This is yet another Book"},
			] 

			$scope.items=Items

			console.log("hello")
	 		$scope.title = 'Hi there'
			$scope.clicks=0
			$scope.Test = function(){
			console.log("Clicked")
			$scope.title = 'Clicked'
			$scope.clicks+=1
			$scope.title = 'Clicked ' + $scope.clicks + ' times'
			}
		}
	});