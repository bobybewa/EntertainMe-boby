const tvSeries = require('../models')

class SeriesController{
    static async findAllSeries(req, res){
        try {
            const series = await tvSeries.findAll()
            // console.log(series);
            res.status(200).json(series)
        } catch (error) {
            console.log(error);
        }
    }
    static async addSeries(req, res){
        try {
            const newSeries = req.body
            const series = await tvSeries.addSeries(newSeries)
            res.status(200).json(series)
        } catch (error) {
            
        }
    }
    static async updateSeries(req, res){
        const { id } = req.params
        const payload = { 
            id: id,
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tags: req.body.tags
        }
        const data = await tvSeries.updateOne(payload)
        res.status(200).json(data)
    }

    static async deleteSeries(req, res){
        const { id } = req.params
        const data = await tvSeries.deleteTheSeries(id)
        res.status(200).json({
            msg: 'success delete',
        })
    }

    static async getDetailsSeries(req, res){
        const { id } = req.params
        const data = await tvSeries.getSeries(id)
        res.status(200).json(data)
    }
}

module.exports = SeriesController