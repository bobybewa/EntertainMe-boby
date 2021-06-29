const express = require('express')
const router = express.Router()
const controllerSeries = require('../controllers')

router.get('/tvSeries', controllerSeries.findAllSeries)
router.post('/tvSeries', controllerSeries.addSeries)
router.put('/tvSeries/:id', controllerSeries.updateSeries)
router.delete('/tvSeries/:id', controllerSeries.deleteSeries)
router.get('/tvSeries/:id', controllerSeries.getDetailsSeries)
module.exports = router