import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
query getMovies {
    movies {
        title
        poster_path
        popularity
        _id
    }
}
`

export const GET_MOVIES_BY_ID = gql`
query getById($inputId: ID){
    movie(id: $inputId){
        _id
        title
        poster_path,
        popularity,
        overview
    }
}
`

export const GET_SERIES = gql`
query getSeries{
	tvSeries{
    title,
    poster_path,
    _id
    }
}
`

// export const GET_ALLDATA = gql`
// query getData {
//     movies {
//         title
//         poster_path
//         _id
//     },
//     tvSeries{
//         title
//         _id
//     }
// }
// `
