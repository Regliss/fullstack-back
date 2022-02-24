const Product = require('../../models/product.model');

module.exports = {
    Query: {
        getProducts: () => {
            return Product.find().populate('genres');
        },
        getProduct(parent, args, context) {
            return Product.findById(args.id).populate('genres');
        }
    },
    Mutation: {
        createProduct(parent, args) {
            const newProduct = new Product(
                {
                    title: args.title,
                    description: args.description,
                    img: args.img,
                    age: args.age,
                    language: args.language,
                    releaseDate: args.releaseDate,
                    duration: args.duration,
                    // genre: [Action, Anime, Comédies, Documentaires, Drames, Fantastique, Français, Horreur, Indépendants, International, Jeunesse et famille, Musique et comédies musicales, Policier, Primés, Romance, SF, Thriller]
                    director: args.director,
                    distribution: args.distribution,
                    scriptwriter: args.scriptwriter,
                    genres: args.genres
                }
            )
            return newProduct.save();
        },
        updateProduct(parent, {id, title, description, img, age, language, releaseDate, duration, director, distribution, scriptwriter, genres}) {
            return Product.findByIdAndUpdate(id, { title: title, description: description, img: img, age: age, language: language, releaseDate: releaseDate, duration: duration, director: director, distribution: distribution, scriptwriter: scriptwriter, genres:genres});
        }
    }
}