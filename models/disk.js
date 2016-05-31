module.exports = function(mongoose) {
    var DiskSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        artist: {
            type: String,
        }
    });
    return mongoose.model('Disk', DiskSchema);
}