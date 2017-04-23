var mongoose = require('mongoose');
var mongourl = 'mongodb://teamawsome:FinallyAwsome1#@ds115701.mlab.com:15701/teamawsome';
mongoose.Promise = global.Promise;
var connection = mongoose.createConnection(mongourl);
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(connection);

var resvSchema = new mongoose.Schema({
    resv_name: {type: String},
    resv_id: {type: Number, unique: true},
    resv_lat: {type: String},
    resv_lng: {type: String},
    resv_maxCap: {type: Number, default: 1000}
    });

resvSchema.plugin(autoIncrement.plugin, {model: 'reservoir', field: 'resv_id'});

var reservoir = mongoose.model('reservoir', resvSchema);

module.exports = reservoir;