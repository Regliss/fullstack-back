const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: false,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: false,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isSubscribe: {
		type: Boolean,
		default: false
	},
	isPremium: {
		type: Boolean,
		default: false
	},
	subscribeDate: {
		type: String
	},
    isAdmin: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);