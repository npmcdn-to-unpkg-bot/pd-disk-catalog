(function() {
	disks = [{
		name: "White Album",
		artist: "The Beatles",
		description: "Um dos albuns mais famosos dos queridinhos da Inglaterra."
	}, {
		name: "Tchan no havai",
		artist: "É o tchan",
		description: "Um clássico da música popular brasileira!",
	}];
	function DiskController() {
		this.disks = disks;
		this.isEditing = false;
		this.imageOrDefault = function(disk, isEditing) {
			return disk.imageUrl ||'http://placehold.it/80x80?text=IMAGE';
		};

		this.disk = {};
		this.submitEdition = function() {
			this.disks.push(this.disk);
			this.isEditing = false;
			this.disk = {};
		};

		this.showForm = function() {
			this.isEditing = true;
		};
	};
	angular.module('diskCatalog').controller('DiskController', DiskController);
})()