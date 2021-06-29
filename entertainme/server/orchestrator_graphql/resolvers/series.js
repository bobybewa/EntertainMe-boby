const axios = require('axios')
const baseUrl = 'http://localhost:4002/tvSeries'
const Redis = require("ioredis");
const redis = new Redis(); // uses defaults unless given configuration object

const resolvers = {
    Query : {
        tvSeries : async () => {
            const dataSeries = await redis.get('dataSeries')
            if(dataSeries){
                return JSON.parse(dataSeries)
            }else{
                return axios({
                    method: 'GET',
                    url: baseUrl
                })
                .then( async ({ data }) => {
                    await redis.set('dataSeries',JSON.stringify(data))
                    return data
                })
                .catch(err => {
                    console.log(err, "<<<<<");
                })
            }
        },
        seriesOne: (_, args) => {
            console.log(args, 'get series by id');
            return axios({
                method: 'GET',
                url: baseUrl + `/${args._id}`
            })
            .then(({ data }) => {
                return data[0]
            })
            .catch(err => {
                console.log(err, "<<<< ");
            })
        }
    },
    Mutation:{
        addSeries: (_, args) => {
            const newSeries = {
                title: args.title,
                overview: args.overview,
                poster_path: args.poster_path,
                popularity: args.popularity,
                tags: args.tags
            }
            return axios({
                method: 'post',
                url: baseUrl,
                data: newSeries
            })
            .then(({ data }) => {
                redis.del('dataSeries')
                return data.ops[0]
            })
            .catch(err => {
                console.log(err);
            })
        },
        deleteSeries: (_, args) => {
            console.log('masuk sini');
            console.log(args, 'delete serie');
            return axios({
                method: 'delete',
                url : baseUrl +  '/' + args._id
            })
            .then(() => {
                redis.del('dataSeries')
            })
            .catch(err => {
                throw err
            })
        },
        updateSeries: (_, args) => {
            const id  = args._id
            const dataSeries = {
                title: args.title,
                overview: args.overview,
                poster_path: args.poster_path,
                popularity: args.popularity,
                tags: args.tags
            }
            return axios({
                method: 'put',
                url: baseUrl + `/${id}`,
                data: dataSeries
            })
            .then(() => {
                redis.del('dataSeries')
                return dataSeries
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}

module.exports = resolvers