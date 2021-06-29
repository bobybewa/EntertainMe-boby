const express = require('express')
const app = express()
const port = process.env.PORT || 4002
const {connect} = require('./config/mongodb')
const seriesRoute = require('./routes') 
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/', (req,res) => {
    res.send('ini series')
})
app.use(seriesRoute)

connect()
    .then(async (db) => {
        console.log('mongo berhasil connect');
        const movies = await db.collection('Movies').find().toArray()
        app.listen(port, () => {
            console.log('ini series ' + port);
        })
    })