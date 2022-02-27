const { gql } = require('apollo-server-express');

module.exports = gql`
    type User {
        id: ID
        firstName: String
        lastName: String
        password: String,
        email: String,
        isStandart: Boolean,
        isPremium: Boolean,
        subscribeDate: String,
        isAdmin: Boolean
    }
    extend type Query {
        getUser:[User]
        getUsers(id:ID):User!
    }
    extend type Mutation {
        createUser(firstName:String, lastName:String, password:String, email:String, isStandart:String, isPremium:String, subscribeDate:String, isAdmin:Boolean):User
        updateUser(id:ID!, firstName:String, lastName:String, password:String, email:String, isStandart:String, isPremium:String, subscribeDate:String, isAdmin:Boolean]):User
    }
`