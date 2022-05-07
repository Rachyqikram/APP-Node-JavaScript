const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	username: String,
	password: Number,
	passwordcon: Number,
	metier: String
});

module.exports = mongoose.model('users', productSchema);