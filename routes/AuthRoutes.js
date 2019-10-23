const router = require('express').Router();
const User = require('../models/User');

router.post('/SignUp', async (req, res) => {
	///check for email duplicates
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('This email is already in use');
	//create new user

	const user = new User({
		email: req.body.email,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		date: req.body.data
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send(err);
	}
});
////LOGIN
router.post('/LogIn', async (req, res) => {
	console.log(req.body);
	const user = await User.findOne({ email: req.body.email });
	console.log(user);
	if (!user) return res.status(400).send("Email or password doesn't exists");

	return res.status(201).send({
		success: true,
		message: 'Logged In'
	});
});

module.exports = router;
