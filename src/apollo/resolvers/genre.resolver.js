const Genre = require('../../models/genre.model');

module.exports = {
    Query: {
        getGenres: () => {
            return Genre.find();
        },
        getGenre(parent, args, context) {
            return Genre.findById(args.id);
        }
    },
    Mutation: {
        createGenre(parent, args) {
            const newGenre = new Genre(
                {
                    title: args.title,
                }
            )
            return newGenre.save();
        },
        updateGenre(parent, {id, title}) {
            return Genre.findByIdAndUpdate(id, { title: title});
        }
    }
}