const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    link: String,
    age: [0, 7, 13, 16, 18],
    language: String,
    releaseDate: String,
    duration: String,
    description: String,
    // genre: ["Action", "Anime", "Comédies", "Documentaires", "Drames", "Fantastique", "Français", "Horreur", "Indépendants", "International", "Jeunesse et famille", "Musique et comédies musicales", "Policier", "Primés", "Romance", "SF", "Thriller"],
    director: String,
    distribution: String,
    scriptwriter: String,
    genres: [{ 
      type:Schema.Types.ObjectId, ref:'Genre'
  }]
});

module.exports = mongoose.model('Product', productSchema);