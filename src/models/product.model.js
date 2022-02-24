const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    img: String,
    // age: [0, 7, 13, 16, 18],
    age: Number,
    language: String,
    releaseDate: String,
    duration: String,
    description: String,
    director: String,
    distribution: String,
    scriptwriter: String,
    genres: [{ 
      type:Schema.Types.ObjectId, ref:'Genre'
  }]
});

module.exports = mongoose.model('Product', productSchema);