const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./type/index')
const resolvers = require('./resolvers/index')
// console.log(typeDefs, '<<<');
const server = new ApolloServer({
    typeDefs : typeDefs,
    resolvers: resolvers
})

// console.log(server);
server.listen().then(({ url }) => {
    console.log('server running on ' + url);
})