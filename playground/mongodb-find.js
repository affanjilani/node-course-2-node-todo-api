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

	//Query, get collection in this case is already existing, gives promise
	db.collection('Todos').find({completed: false}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	db.collection('Todos').find().toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	//query by id
	db.collection('Todos').find({
		_id: new ObjectID('5ba6c3097d445a09bcf2554c')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	//count
	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	db.collection('Users').find({name: 'Jen'}).toArray().then((docs) => {
		console.log(`Users`);
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});




	//now to query based on values
	//db.close();	//closes connection with server
});	//url where database lives callback fires when connections