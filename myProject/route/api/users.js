const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcrypt");

router.post("/test",(req,res) => {
	var msg = req.body.name;
    res.json({msg: msg});
});

//create
router.post("/register", function(req,res){
	console.log(req.body.name);
	console.log(req.body.email);

	User.findOne({'name':req.body.name}, function(err,user){
		if(user){
			return res.status(400).json("已被註冊");
		}else{
			const newUser = new User({
				name: req.body.name,
				email: req.body.email
			});

			newUser.save(function(err){
			if(err) throw err;
				return res.status(200).json("註冊OK");
			});
		}
	});
});

//read
router.get('/find', function(req,res){
	User.
		find({ name: /Lu/ } ).
		//where('name').equals('Luke').
		select('name email').
		exec(function(err,user){
			console.log(user);
			res.status(200).json(user[0].name);
		});
});

//read
router.get('/fndemail', function(req,res){
	User.
		findOne({ name: req.body.name }, function(err,user){
			console.log(user);

			user.comparePassword(req.body.email, function(err, isMatch) {
			   if (err) throw err;
			   console.log('%s ' + isMatch, req.body.email);
			});

			res.status(200).json('pass');
		});
});

//update
router.post('/update', function(req,res){
	var tempUser = {
		name: req.body.name,
		email: req.body.email
	};

	var condition = {name: tempUser.name};
	var content = {$set:{email:tempUser.email}};

	User.updateOne(condition, content, function(err,user){
		if(err){
			console.log(err);
			return;
		}

		res.status(200).json('OK');
	});
});

//delete
router.delete('/deleteOne', function(req,res){
	User.deleteOne({name:req.body.name}, function(err){
		if(err) console.log(err);
		res.status(200).json('deleteOne done.');
	});
});

module.exports = router;