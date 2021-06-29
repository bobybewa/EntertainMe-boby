const axios = require('axios')
const baseUrl = 'http://localhost:4001/movies'
const Redis = require("ioredis");
const redis = new Redis(); // uses defaults unless given configuration object

const resolvers = {
    Query : {
        movies : async () => {
            const dataMovie = await redis.get('dataMovies')
            if(dataMovie){
                return JSON.parse(dataMovie)
            }else{
                return axios({
                    method: 'GET',
                    url: baseUrl
                })
                .then( async ({ data }) => {
                    await redis.set('dataMovies', JSON.stringify(data))
                    return data
                })
                .catch(err => {
                    console.log(err.message, 'ini err');
                })
            }
        },
        movie: (_, args) => {
            // console.log(args, 'masuk orchestrator movie');
            return axios({
                method: 'GET',
                url: baseUrl + `/${args.id}`
            })
            .then(async ({ data }) => {
                return data[0]
            })
            .catch(err => {
                console.log(err.message);
            })
        }
    },
    Mutation:{
        addMovie: (_, args) => {
            const newMovie = args.movie
            return axios({
                method: 'post',
                url: baseUrl,
                data: newMovie
            })
            .then(({ data }) => {
                redis.del('dataMovies')
                return data.ops[0]
            })
            .catch(err => {
                console.log(err);
            })
        },
        deleteMovie: async (_, args) => {
            console.log('kesini');
            try {
                let { id } = args
                let { data } = await axios({
                    method: 'delete',
                    url: baseUrl + '/' + id
                })
                await redis.del('dataMovies')
                console.log(data,"<<<");
                return data
            } catch (error) {
                return error
            }
        },
        updateMovie: (_, args) => {
            const id  = args.id
            const { newData } = args
            return axios({
                method: 'put',
                url: baseUrl + `/${id}`,
                data: newData
            })
            .then(() => {
                redis.del('dataMovies')
                return newData
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}

module.exports = resolvers