const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
	}
});

module.exports = mongoose.model('User', userSchema);
