import { gql } from '@apollo/client';


export const ADD_MOVIES = gql`
mutation addMovie($input: newMovie){
    addMovie(movie: $input){
        _id
        title
        overview
        poster_path
        popularity
        tags
    }
}
`

export const DELETE_MOVIE = gql`
mutation deleteMovie($_id: ID){
    deleteMovie(id: $_id){
        title
        overview
        poster_path
        popularity
    }
}
`

export const EDIT_MOVIE = gql`
mutation editMovie($id: ID, $newMovie: editMovie){
    updateMovie(id: $id, newData: $newMovie){
        title
        overview
    }
}
`