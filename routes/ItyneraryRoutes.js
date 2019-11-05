const express = require('express');
const router = express.Router();
const Mytinerary = require('../models/ItynerarySchema');

///Get back all the list
router.get('/', async (req, res) => {
   try {
      const allCities = await Mytinerary.find();
      res.json(allCities);
   } catch (err) {
      res.json({ message: err });
   }
});

///Submit a schema
router.post('/', (req, res) => {
   const mytinerary = new Mytinerary({
      title: req.body.title,
      profilePic: req.body.profilePic,
      rating: req.body.rating,
      duration: req.body.duration,
      price: req.body.price,
      hashtag: req.body.hashtag,
      ref: req.body.ref,
      images: req.body.images
   });
   mytinerary
      .save()
      .then(data => {
         res.json(data);
      })
      .catch(err => {
         res.json({ message: err });
      });
});
//get a specific city
router.get('/:id', async (req, res) => {
   try {
      const uniqueCity = await Mytinerary.findById(req.params.id);
      res.json(uniqueCity);
   } catch (err) {
      res.json({ message: err });
   }
});

router.get('/profile/:name', (req, res) => {
   res.send('You requested to see' + req.params.name);
});

////Delete a city
router.delete('/:id', async (req, res) => {
   try {
      const removeCity = await Mytinerary.deleteOne({ _id: req.params.id });
      res.json(removeCity);
   } catch (err) {
      res.json({ message: err });
   }
});
///Update a city
router.patch('/:id', async (req, res) => {
   try {
      const updateCity = await Mytinerary.updateOne(
         { _id: req.params.id },
         { $set: { title: req.body.title } }
      );
      res.json(updateCity);
   } catch (err) {
      res.json({ message: err });
   }
});

module.exports = router;
