const { gql } = require('apollo-server-express');

module.exports = gql`
    type Product {
        id: ID
        title: String
        description: String,
        img: String,
        trailer: String,
        age: Int,
        language: String,
        releaseDate: String,
        duration: String,
        director: String,
        distribution: String,
        scriptwriter: String,
        genres:[Genre]
    }
    type Query {
        getProducts:[Product]
        getProduct(id:ID):Product!
    }
    type Mutation {
        createProduct(title:String!, description:String, img:String, trailer:String, age:Int, language:String, releaseDate:Int, duration:String, director:String, distribution:String, scriptwriter:String, genres:[ID]):Product
        updateProduct(id:ID!, title:String!, description:String, img:String, trailer:String, age:Int, language:String, releaseDate: Int, duration:String, director:String, distribution:String, scriptwriter:String, genres:[ID]):Product
    }
`