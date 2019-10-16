
const mongoose = require('mongoose');


const CitiesSchema = mongoose.Schema({
    title: {
        type: String,
    },
    profilePic: {
        type: String
    },
    rating: {
        type: String
    },
    duration: {
        type: Number
    },
    price: {
        type: Number
    },
    hashtag: {
        type: Array
    }

});

module.exports = mongoose.model('CityInfo', CitiesSchema);
