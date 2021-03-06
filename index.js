const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const config = require('./routes/config');

const dotenv = require('dotenv');
dotenv.config();

/////ITYNERARY ROUTES
const ItyneraryRoutes = require('./routes/ItyneraryRoutes');
app.use('/Mytinerary', ItyneraryRoutes);
////FAV ITYNERARIES ROUTES

const FavRoutes = require('./routes/MyFavItyneraries');
app.use('/Myfav', FavRoutes);
///User routes
const AuthRoutes = require('./routes/AuthRoutes');
app.use('/user', AuthRoutes);

////Mongoose
const mongoose = require('mongoose');
mongoose.connect(config.databaseConnect, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
	console.log('Connected to DB')
);

///MongoDB Cloud Atlas Cities
MongoClient.connect(config.databaseConnect, { useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
	if (err) return console.log(err);

	app.listen(8080, () => {
		console.log('Server running on port 8080 ');
	});

	let dbase = db.db('test');

	app.post('/cities/add', (req, res, next) => {
		let city = {
			name: req.body.name,
			country: req.body.country,
			images: [ req.body.images ]
		};

		dbase.collection('cities').save(city, (err, result) => {
			if (err) {
				throw console.error(err);
			}

			res.send('data added successfully');
		});
	});
	app.get('/mycities/:id', (req, res, next) => {
		if (err) {
			throw err;
		}

		let id = ObjectID(req.params.id);
		dbase.collection('CityItynerary').find(id).toArray((err, result) => {
			if (err) {
				throw err;
			}

			res.send(result);
		});
	});

	app.get('/cities', (req, res) => {
		dbase.collection('cities').find().toArray((err, results) => {
			if (err) throw console.error(err);
			res.send({
				success: true,
				data: results
			});
		});
	});

	app.get('/cities/:id', (req, res, next) => {
		if (err) {
			throw err;
		}

		let id = ObjectID(req.params.id);
		dbase.collection('cities').find(id).toArray((err, result) => {
			if (err) {
				throw err;
			}

			res.send(result);
		});
	});

	app.put('/cities/update/:id', (req, res, next) => {
		var id = {
			_id: new ObjectID(req.params.id)
		};

		dbase
			.collection('cities')
			.update(
				id,
				{ $set: { name: req.body.name, country: req.body.country, images: [ req.body.images ] } },
				(err, result) => {
					if (err) {
						throw err;
					}

					res.send('info updated sucessfully');
				}
			);
	});

	app.delete('/cities/delete/:id', (req, res, next) => {
		let id = ObjectID(req.params.id);

		dbase.collection('cities').deleteOne({ _id: id }, (err, result) => {
			if (err) {
				throw err;
			}

			res.send('data deleted');
		});
	});

	//

	app.get('/itinerary/:name', (req, res) => {
		dbase
			.collection('cityinfos')
			.find({
				ref: req.params.name
			})
			.toArray((err, results) => {
				if (err) throw err;
				res.send(results);
			});
	});
});
