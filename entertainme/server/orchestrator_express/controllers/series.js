const axios = require('axios')
const baseUrl = 'http://localhost:4002'

class SeriesController{
    static async findAllSeries(req, res){
        axios({
            url: baseUrl + '/tvSeries',
            method: 'GET'
        })
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
    }
    static async addSeries(req, res){
        const { title, overview, poster_path, popularity, tags } = req.body
        axios({
            url: baseUrl + '/tvSeries',
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
    static async updateSeries(req, res){
        const { title, overview, poster_path, popularity, tags } = req.body
        const { id } = req.params
        axios({
            url: baseUrl + '/tvSeries/' + id,
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

    static async deleteSeries(req, res){
        const { id } = req.params
        axios({
            url: baseUrl + '/tvSeries/' + id,
            method: 'delete'
        })
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
    }

    static async getDetailsSeries(req, res){
        const { id } = req.params
        axios({
            url: baseUrl + '/tvSeries/' + id,
            method: 'GET'
        })
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
    }
}

module.exports = SeriesController