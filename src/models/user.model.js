const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
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
	releaseDate: {
		type: String
	},
    isAdmin: {
        type: Boolean,
        required: true,
    },
    orders:[{ type: Schema.Types.ObjectId, ref: 'Order' }]
});

module.exports = mongoose.model('User', userSchema);