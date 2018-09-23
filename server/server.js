var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//configure middleware
app.use(bodyParser.json());
//when creating resource, POST http message and send as body
//send json object over to server, have text property, server gets property and
//sends full model back

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);	//response.send to send doc back
	}, (e) => {
		res.status(400).send(e);	//400 means bad request
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {app};
