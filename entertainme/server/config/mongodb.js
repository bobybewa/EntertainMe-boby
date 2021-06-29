const { MongoClient } = require("mongodb")
let database = null
async function connect() {
    try {
        const uri = 'mongodb://localhost:27017'
        const client = new MongoClient(uri, {
            useUnifiedTopology: true
        })
        await client.connect()
        const db = client.db("entertainMe")
        database = db
        return database
    } catch (error) {
        console.log(error);
    }
}

function getData(){
    return database
}

module.exports = {
    connect,
    getData
}