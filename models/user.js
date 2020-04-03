const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	createDt:{
		type: Date,
		default: Date.now
	}
});

//encrypt
UserSchema.pre('save', function(next) {
    var user = this;

    if (!user.isModified('email')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.email, salt, function(err, hash) {
            if (err) return next(err);

            user.email = hash;
            next();
        });
    });
});

//decrypt verify
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
 bcrypt.compare(candidatePassword, this.email, function(err, isMatch) {
  if (err) return cb(err);
  cb(null, isMatch);
 });
};

module.exports = User = mongoose.model("users", UserSchema);