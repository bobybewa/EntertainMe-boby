const { gql } = require('apollo-server');


const typeOfMovie = gql`
    type Movie {
        _id : ID
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    extend type Query {
        movies : [Movie],
        movie(id: ID) : Movie
    }

    input newMovie{
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }
    
    input editMovie{
        title: String,
        overview: String
    }
    extend type Mutation {
        addMovie(movie: newMovie) : Movie

        updateMovie(id: ID, newData: editMovie) : Movie

        deleteMovie(id: ID) : Movie
    }
`
module.exports = typeOfMovie