const Movies = require('../models/movies')

class MovieController{
    static async findAllMovies(req,res) {
        try {
            const movies = await Movies.find()
            res.status(200).json(movies)
        } catch (error) {
            console.log(error);
        }
    }
    static async addMovie(req, res){
        try {
            const newMovie = req.body
            const movie = await Movies.addMovie(newMovie)
            res.status(201).json(movie)
        } catch (error) {
            console.log(error);
        }
    }
    static async updateMovie(req, res){
        try {
            const { id } = req.params
            const payload = {
                id : id,
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tags: req.body.tags
            }
            const data = await Movies.updateOne(payload)
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }
    static async deleteMovie(req, res){
        const { id } = req.params
        const data = await Movies.deleteMovie(id)
        res.status(200).json({
            msg: 'success delete'
        })
    }
    static async getDetails(req, res){
        const { id } = req.params
        const data = await Movies.detailMovie(id)
        res.status(200).json(data)
    }
}

module.exports = MovieController