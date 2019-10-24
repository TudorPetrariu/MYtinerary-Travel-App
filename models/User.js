const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		require: true,
		min: 6
	},
	password: {
		type: String,
		require: true,
		min: 6
	},

	firstName: {
		type: String,
		require: true
	},
	lastName: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);
