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
		template:'<div ><h1 class="new-class">{{ title }}</h1><button ng-click="Test()">Click me!</button></div>',
		controller:function($scope){
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