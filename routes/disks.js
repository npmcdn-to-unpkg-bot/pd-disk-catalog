var express = require('express');

module.exports = function(Disk) {
	var router = express.Router();

	/* GET users listing. */
	router.get('/', function(req, res, next) {
		Disk.find({}, function(err, docs) {
			res.json(docs);
		});
	});


	router.post('/', function(req, res, next) {
		var disk = new Disk(req.body);
		disk.save(function(err) {
			if (err) {
				console.log(err);
			}
		});
	});
	return router;
}
