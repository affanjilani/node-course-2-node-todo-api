//install lib using npm install mongodb@2.2.5
//look for mongo client to connect to server
/*const MongoClient = require('mongodb').MongoClient;*/
const {MongoClient, ObjectID} = require('mongodb');	//lets us make new object ids on fly

/*var obj = new ObjectID();	//create new instance of objectid
console.log(obj);*/

/*var user = { name : 'andrew', age: 25};	//destructure user object and create new name value
var {name} = user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) { 
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	/*//insert new record, 2 collections
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed:false
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/

	/*db.collection('Users').insertOne({
		name: 'Affan',
		age: 25,
		location: 'Philadelphia'
	}, (err, result) => {
		if(err) {
			return console.log('Unable to insert user', err);
		}
		console.log(result.ops[0]._id.getTimestamp());
	});*/
	db.close();	//closes connection with server
});	//url where database lives callback fires when connections