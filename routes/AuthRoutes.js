const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
	///check for email duplicates
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('This email is already in use');

	//create new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send(err);
	}
});
////LOGIN
router.post('/login', async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Email or password doesn't exist");
	res.send('Logged in');
});

module.exports = router;
