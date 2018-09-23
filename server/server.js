//load mongoose
var mongoose = require('mongoose');

//want to use built in library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
//maintaining connection over time

//save new something, this statement might run too quick but mongoose will take
//care of it, we don't have to micro manage

//now connected

//we must now create model. We can have differing objects in same collection
//mongoose likes to organize it more and know exactly how the data is
var Todo = mongoose.model('Todo', {
	text: {	//tell mongoose exactly what text is, if its required, details
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

//now create instance
var newTodo = new Todo({
	text: 'Cook dinner'
});

/*//this does not save to database
newTodo.save().then((doc) => {
	console.log('Saved todo', doc);
}, (e) => {
	console.log('Unable to save todo');
});*/

newTodo = new Todo({
	text: 'Code something',
	completed: true,
	completedAt: 123
});

newTodo.save().then((doc) => {
	console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
	console.log('Unable to save', e);
});