//install lib using npm install mongodb@2.2.5
//look for mongo client to connect to server
/*const MongoClient = require('mongodb').MongoClient;*/
const {MongoClient, ObjectID} = require('mongodb');	//lets us make new object ids on fly

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) { 
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5ba6f7517d445a09bcf2571c')
	}, {
		$set: {	//update operator
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5ba6c098a996360424f5296f')
	}, {
		$set: {
			name: 'Affan'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//db.close();	//closes connection with server
});	//url where database lives callback fires when connections