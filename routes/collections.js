var express = require('express');

module.exports = function(Collection) {
	var router = express.Router();

	/* GET users listing. */
	router.get('/', function(req, res, next) {
		var regexpQuery = {};
		for (var q in req.query) {
			regexpQuery[q] = new RegExp(req.query[q]);
		}
		console.log(regexpQuery);
		Collection.find(regexpQuery || {})
			.populate('disks')
			.exec(function(err, docs) {
			if (err)
				console.log(err);
			res.json(docs);
		});
	});

	router.get('/:id', function(req, res, next) {
		Collection.findOne({_id: req.params.id}, function(err, docs) {
			res.json(docs);
		});
	});

	router.post('/', function(req, res, next) {
		var collection = new Collection(req.body);
		collection.save(function(err) {
			if (err) {
				console.log(err);
				res.json(err);
			}
			return res.json(true);
		});
	});
	return router;
}
