const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')
const SeriesController = require('../controllers/series')

router.get('/movies', movieController.findAllMovies)
router.post('/movies', movieController.addMovie)
router.put('/movies/:id', movieController.updateMovie)
router.delete('/movies/:id', movieController.deleteMovie)
router.get('/movies/:id', movieController.getDetails)

router.get('/tvSeries', SeriesController.findAllSeries)
router.post('/tvSeries', SeriesController.addSeries)
router.put('/tvSeries/:id', SeriesController.updateSeries)
router.delete('/tvSeries/:id', SeriesController.deleteSeries)
router.get('/tvSeries/:id', SeriesController.getDetailsSeries)
module.exports = router