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
	
	//deleteMany target many docs
	/*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	});*/

	//deleteOne
	/*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	});	*/

	//findOneAndDelete delete one and return deleted doc
	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	});

	db.close();	//closes connection with server
});	//url where database lives callback fires when connections