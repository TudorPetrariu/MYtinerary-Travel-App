const router = require('express').Router();
const User = require('../models/User');
const ObjectId = require('objectid');
const verify = require('./tokenverify');

router.get('/', verify, async (req, res) => {
	try {
		const user = await User.findOne({
			_id: ObjectId(req.user._id)
		});
		console.log(user);
		res.json(user);
	} catch (err) {
		console.log(err);
		res.json({ message: err });
	}
});

module.exports = router;
