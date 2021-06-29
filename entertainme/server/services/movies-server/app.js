const express = require('express')
const app = express()
const port = process.env.PORT || 4001
const {connect} = require('./config/mongodb')
const moviesRoute = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', async (req,res) => {
    res.send('ini movie server')
})
app.use(moviesRoute)

connect()
    .then(async (db) => {
        console.log('mongo berhasil connect');
        const movies = await db.collection('Movies').find().toArray()
        // console.log(movies, "<<<");
        app.listen(port, () => {
            console.log('ini movies ' + port);
        })
    })