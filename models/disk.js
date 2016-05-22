var mongoose = require('mongoose');

var db = mongoose.createConnection(process.env.MONGODB_URL||'localhost', 'pd-catalog');

var DiskSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	disks: {
		type: mongoose.Schema.ObjectId,
		ref: 'disk'
	}
});

module.exports = db.model('disks', DiskSchema);