const { gql } = require('apollo-server');


const typeOfSeries = gql`
    type tvSeries {
        _id : ID
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    extend type Query {
        tvSeries : [tvSeries],
        seriesOne(id: ID) : tvSeries
    }

    extend type Mutation {
        addSeries(
            title: String
            overview: String
            poster_path: String
            popularity: Float
            tags: [String]
        ) : tvSeries

        updateSeries(
            _id : ID
            title: String
            overview: String
            poster_path: String
            popularity: Float
            tags: [String]
        ) : tvSeries

        deleteSeries(
            _id: ID
        ) : tvSeries
    }
`
module.exports = typeOfSeries