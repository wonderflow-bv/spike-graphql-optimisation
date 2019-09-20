const { ApolloServer, gql } = require('apollo-server')

const readFileSync = path => require('fs').readFileSync(require('path').join(__dirname, path), 'utf8')

const resolvers = require('./resolvers')
const typeDefs = gql(readFileSync('./schema.graphql'))

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
