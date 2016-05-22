var express = require('express');

module.exports = function(Collection) {
	var router = express.Router();

	/* GET users listing. */
	router.get('/', function(req, res, next) {
		Collection.find({}, function(err, docs) {
			res.json(docs);
		});
	});


	router.post('/', function(req, res, next) {
		var collection = new Collection(req.body);
		collection.save(function(err) {
			if (err) {
				console.log(err);
			}
		});
	});
	return router;
}
