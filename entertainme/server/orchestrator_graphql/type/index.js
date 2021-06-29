const { gql } = require('apollo-server');

const typeOfMovie = require('./movies')
const typeOfSeries = require('./series')

const typeDefs = gql`
    type Query
    type Mutation
`

module.exports = {
    typeDefs: [typeOfMovie, typeOfSeries, typeDefs]
}