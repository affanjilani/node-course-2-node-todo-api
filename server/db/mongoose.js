//load mongoose
var mongoose = require('mongoose');

//want to use built in library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//give back configured mongoose
module.exports = {
	mongoose
};