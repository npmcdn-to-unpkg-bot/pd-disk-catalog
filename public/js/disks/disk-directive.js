(function() {
	function DiskDescription() {
		return {
			restrict: 'E',
			templateUrl: '/views/disk-view.html',
			controller: 'DiskController',
			controllerAs: 'diskCtrl'
		};
	};
	function DiskEdition() {
		return {
			restrict: 'E',
			templateUrl: '/views/disk-edit.html',
			controller: 'DiskController',
			controllerAs: 'diskCtrl'
		};
	};
	angular.module('diskCatalog').directive('diskDescription', DiskDescription);
	angular.module('diskCatalog').directive('diskEdition', DiskEdition);
})()