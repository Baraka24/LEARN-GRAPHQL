//assigns the ApolloServer class from the apollo-server package to the variable ApolloServer and import the apollo-server package
const { ApolloServer } = require("apollo-server");
const {typeDefs} = require('./schema/type-defs');
const {resolvers} = require('./schema/resolvers');
//create a new instance of the ApolloServer class and assigns it to the variable server
// Define the GraphQL schema using typeDefs
// Define the resolvers for the GraphQL schema
const server = new ApolloServer({ typeDefs, resolvers});

// Start the Apollo Server and print the URL where it is running
server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url} :`);
})