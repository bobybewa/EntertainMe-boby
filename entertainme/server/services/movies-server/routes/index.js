const express = require('express')
const router = express.Router()
const controllerMovie = require('../controller')
router.get('/movies', controllerMovie.findMovies)
router.post('/movies', controllerMovie.newMovie)
router.get('/movies/:id', controllerMovie.getDetails)
router.put('/movies/:id', controllerMovie.updateMovie)
router.delete('/movies/:id', controllerMovie.deleteMovie)

module.exports = router