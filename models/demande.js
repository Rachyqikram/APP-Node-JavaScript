const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	firstname: String,
	lastname: String,
	email: String,
	phone: Number,
	address: String,
	sujet: String,
	entrepise: String
});

module.exports = mongoose.model('demande', productSchema);