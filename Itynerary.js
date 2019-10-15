const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
    title: {
        type: String
    },

    places: {
        type: String
    },
    rating: {
        type: String
    },

    info: {
        type: String
    },
    prices: {
        type: Number
    }

})

const MyCities = mongoose.model('CityInfo', CitiesSchema)
module.exports = MyCities;
