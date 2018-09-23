var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {	//tell mongoose exactly what text is, if its required, details
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {
	Todo
};