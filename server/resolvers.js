const db = require('./db')

const resolvers = {
  Query: {
    books: () => db
  }
}

module.exports = resolvers
