(function() {
	function DiskDirective() {
		return {
			restrict: 'E',
			templateUrl: '/views/disk-view.html',
			controller: 'DiskController',
			controllerAs: 'diskCtrl'
		};
	};
	angular.module('diskCatalog').directive('diskDescription', DiskDirective);
})()