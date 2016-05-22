(function() {
	disk = {
		name: "White Album",
		artist: "The Beatles",
		description: "Um dos albuns mais famosos dos queridinhos da Inglaterra."
	}
	function DiskController() {
		this.disk = disk;
		this.imageOrDefault = function(disk) {
			return disk.imageUrl ||'http://placehold.it/80x80?text=IMAGE';
		}
	};
	angular.module('diskCatalog').controller('DiskController', DiskController);
})()