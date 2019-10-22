const mongoose = require('mongoose');

const CitiesSchema = mongoose.Schema({
	title: {
		type: String
	},
	profilePic: {
		type: String
	},
	rating: {
		type: String
	},
	duration: {
		type: String
	},
	price: {
		type: Number
	},
	hashtag: {
		type: Array
	},
	ref: {
		type: String
	}
});

module.exports = mongoose.model('CityInfo', CitiesSchema);
