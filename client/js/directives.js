window.angular.module('lakes.directives',[])
	.directive('lakes', function(){
		return {
			restrict: 'E',
			templateUrl: 'js/views/lakes.html'
		};
	});