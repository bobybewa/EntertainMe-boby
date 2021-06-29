const { merge } = require('lodash') 
const movieResolvers = require('./movies')
const seriesResolvers = require('./series')

const resolvers = merge(movieResolvers, seriesResolvers)
module.exports = resolvers