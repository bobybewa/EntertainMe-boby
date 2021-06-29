const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const {connect} = require('../config/mongodb')
const moviesRoute = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/', async (req,res) => {
    res.send('jalan')
})
app.use(moviesRoute)

connect()
    .then(async (db) => {
        console.log('mongo berhasil connect');
        const movies = await db.collection('Movies').find().toArray()
        app.listen(port, () => {
            console.log('i love u ' + port);
        })
    })