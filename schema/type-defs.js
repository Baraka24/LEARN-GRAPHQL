const { gql } = require("apollo-server");


const typeDefs =gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }


    type Movie {
        id: ID!
        description: String!
        author: String!
        publicationYear: Int!
        isInteresting: Boolean!
    }

    type Query {
        users: [User!]!
        user(id:ID!): User!
        movies: [Movie!]!
        movie(description:String): Movie!
    }

    enum Nationality {
        Congolese
        Rwandan
        Burundian
        Kenyan
        Ugandan
        Tanzanian
    }

    input createUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = Ugandan
    }
    input updateUserInput {
        id: ID!
        newUsername: String!
    }
    type Mutation {
        createUser(input: createUserInput!): User
        updateUser(input: updateUserInput): User
    }
`;
module.exports = {typeDefs};