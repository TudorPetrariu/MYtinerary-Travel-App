const express = require('express')
const router = express.Router();
const Mytinerary = require('../models/Itynerary')


///Get back all the list
router.get('/', async (req, res) => {
    try {
        const allCities = await Mytinerary.find()
        res.json(allCities)

    } catch (err) {
        res.json({ message: err })

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
        hashtag: req.body.hashtag


    });
    mytinerary.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        })

});
//get a specific posts
router.get('/:postId', async (req, res) => {
    try {
        const uniqueCity = await Mytinerary.findById(req.params.postId)
        res.json(uniqueCity);
    } catch (err) {
        res.json({ message: err });

    }
});

////Delete a city
router.delete('/:postId', async (req, res) => {
    try {
        const removeCity = await Mytinerary.remove({ _id: req.params.postId });
        res.json(removeCity)
    } catch (err) {
        res.json({ message: err })
    }
})
///Update a city
router.patch('/:postId', async (req, res) => {
    try {
        const updateCity = await Mytinerary.updateOne({ _id: req.params.id },
            { $set: { title: req.body.title } })
        res.json(updateCity)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router; 