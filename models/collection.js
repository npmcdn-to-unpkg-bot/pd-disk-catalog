module.exports = function(mongoose) {
    var CollectionSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        disks: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Disk'
        }]
    });
    return mongoose.model('Collection', CollectionSchema);
}