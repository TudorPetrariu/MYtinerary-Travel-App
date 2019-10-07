

const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
var ObjectID = require('mongodb').ObjectID;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://tudor123:tudor123@cities-shard-00-00-nv87y.mongodb.net:27017,cities-shard-00-01-nv87y.mongodb.net:27017,cities-shard-00-02-nv87y.mongodb.net:27017/admin?ssl=true&replicaSet=cities-shard-0&authSource=admin&retryWrites=true&w=majority', (err, db) => {
    if (err) return console.log(err)

    app.listen(3000, () => {
        console.log('app working on 3000')
    });

    let dbase = db.db("mytinerary");

    app.post('/cities/add', (req, res, next) => {

        let city = {
            name: req.body.name,
            country: req.body.country,
            images: [req.body.images]
        };

        dbase.collection("cities").save(city, (err, result) => {
            if (err) {
                console.log(err);
            }

            res.send('name added successfully');
        });

    });

    app.get('/cities', (req, res, next) => {
        dbase.collection('cities').find().toArray((err, results) => {
            res.send(results)
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

        dbase.collection("cities").update(id, { $set: { name: req.body.name, country: req.body.country, images: [req.body.images] } }, (err, result) => {
            if (err) {
                throw err;
            }

            res.send('user updated sucessfully');
        });
    });


    app.delete('/cities/delete/:id', (req, res, next) => {
        let id = ObjectID(req.params.id);

        dbase.collection('cities').deleteOne({ _id: id }, (err, result) => {
            if (err) {
                throw err;
            }

            res.send('user deleted');
        });
    });

});