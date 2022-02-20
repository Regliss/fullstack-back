const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    title: {
        type: String,
        lowercase: true
    }
})

module.exports = mongoose.model('Genre', genreSchema);