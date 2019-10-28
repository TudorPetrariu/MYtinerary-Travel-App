const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config');
const verify = require('./tokenverify');
const ObjectId = require('objectid');

router.post('/SignUp', async (req, res) => {
	///check for email duplicates

	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('This email is already in use');

	///////////////HASH PASSWORD
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	////////////

	//CREATE NEW USER
	const user = new User({
		email: req.body.email,
		password: hashedPassword,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		date: req.body.date
	});

	const savedUser = await user.save();

	const token = jwt.sign({ _id: user._id }, config.TokenSecret);
	return res.status(201).send({
		savedUser,
		token
	});
});
////LOGIN
router.post('/LogIn', async (req, res) => {
	// console.log(req.body);

	///Checking if email  it's valid
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Email or password doesn't exists");

	////IF PASSWORD MATCHES

	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send('Invalid password');

	////CREATE AND ASIGN TOKEN

	const token = jwt.sign({ _id: user._id }, config.TokenSecret);
	res.header('auth-token', token);

	return res.status(201).send({
		succes: true,
		token,
		user
	});
});

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
