const { gql } = require('apollo-server-express');

module.exports = gql`
    type Genre {
        id: ID
        title: String
    }
    extend type Query {
        getGenre(id:ID): Genre
        getGenres: [Genre]
    }
    extend type Mutation {
        createGenre(title:String):Genre
        updateGenre(id:ID!, title:String):Genre
    }
`