const axios = require('axios')
const baseUrl = 'http://localhost:4001'
class MovieController{
    static async findAllMovies(req,res) {
        axios({
            url: baseUrl + '/movies',
            method: 'GET'
        })
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
    }
    static async addMovie(req, res){
        const { title, overview, poster_path, popularity, tags } = req.body
        axios({
            url: baseUrl + '/movies',
            method: 'post',
            data : {
                title, 
                overview, 
                poster_path, 
                popularity, 
                tags
            }
        })
        .then(({ data }) => {
            res.status(201).json(data)
        })
        .catch(err => console.log(err))
    }
    static async updateMovie(req, res){
        const { title, overview, poster_path, popularity, tags } = req.body
        const { id } = req.params
        axios({
            url: baseUrl + '/movies/' + id,
            method: 'put',
            data : {
                title, 
                overview, 
                poster_path, 
                popularity, 
                tags
            }
        })
        .then(({ data }) => {
            res.status(201).json(data)
        })
        .catch(err => console.log(err))
    }
    static async deleteMovie(req, res){
        const { id } = req.params
        axios({
            url: baseUrl + '/movies/' + id,
            method: 'DELETE'
        })
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
    }
    static async getDetails(req, res){
        const { id } = req.params
        axios({
            url: baseUrl + '/movies/' + id,
            method: 'GET'
        })
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
    }
}

module.exports = MovieController