var router = require('express').Router();

module.exports = function(Disk) {

	/* GET users listing. */
	router.get('/', function(req, res, next) {
		Disk.find({}, function(err, docs) {
			res.json(docs);
		});
	});

	router.get('/:id', function(req, res, next) {
		Disk.findOne({_id: req.params.id}, function(err, docs) {
			res.json(docs);
		});
	});

	router.post('/', function(req, res, next) {
		var disk = new Disk(req.body);
		disk.save(function(err) {
			if (err) {
				res.json(false);
				return console.log(err);
			} else
				res.json(true);
		});
	});
	return router;
}
