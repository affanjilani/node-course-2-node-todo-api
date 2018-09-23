const expect = require('expect');
const request = require('supertest');

//load in the things we need to test
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//testing lifecycle
beforeEach((done) => {
	Todo.remove({}).then(() => done());	//wipes all of todos
});	//to set up database

//add test cases and use describe block for test outputs
describe('POST /todos', () => {
	it('should create a new todo', (done) => {
		var text = 'Test todo text';

		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect( (res)=> {
			expect(res.body.text).toBe(text);
		})
		.end((err, res) => {
			if (err) {
				done(err);	//wraps up test
			}

			Todo.find().then((todos) => {
				expect(todos.length).toBe(1);
				expect(todos[0].text).toBe(text);
				done();
			}).catch((e) => done(e));	//catches any error in the then callback
		});
	});

	//verify todo does not get created with bad data
	it('should not create todo with invalid body date', (done) => {
		var text = "";

		request(app)
		.post('/todos')
		.send({})
		.expect(400)
		.end((err, res) => {
			if (err) {
				return done(err);
			}
			Todo.find().then((todos) => {
				expect(todos.length).toBe(0);
				done()
			}).catch((e)=> done(e));
		});
	});
})