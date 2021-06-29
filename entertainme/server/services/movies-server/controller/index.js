const Movies = require('../models')

class MovieController{
    static async findMovies(req,res) {
        try {
            const movies = await Movies.find()
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).jsonerr(error)
        }
    }
    static async newMovie(req, res){
        try {
            // console.log(req.body, "req body di controller servicees movies");
            const newMovie = req.body
            const movie = await Movies.addMovie(newMovie)
            res.status(201).json(movie)
        } catch (error) {
            res.status(500).jsonerr(error)
        }
    }
    static async updateMovie(req, res){
        try {
            const { id } = req.params
            const payload = {
                id : id,
                title: req.body.title,
                overview: req.body.overview
            }
            const data = await Movies.updateOne(payload)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).jsonerr(error)
        }
    }
    static async deleteMovie(req, res){
        const { id } = req.params
        const data = await Movies.deleteMovie(id)
        if(data.deletedCount === 0){
            res.status(500).json({ 
                message: 'delete gagal'
            })
        }else{
            res.status(200).json({
                message: 'success delete'
            })
        }
    }
    static async getDetails(req, res){
        // console.log('masuk detail');
        const { id } = req.params
        // console.log(id, "<<<< id di detail");
        const data = await Movies.detailMovie(id)
        // console.log(data,"<<< data di detail controller");
        res.status(200).json(data)
    }
}

module.exports = MovieController