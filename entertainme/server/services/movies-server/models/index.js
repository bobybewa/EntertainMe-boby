const { getData } = require('../config/mongodb')
const { ObjectId } = require('mongodb')
class Movies{
    static async find() {
        return getData().collection('movies').find().toArray();
    }
    static async addMovie(payload) {
        return getData().collection('movies').insertOne(payload)
    }
    static async updateOne(payload){
        return getData().collection('movies').updateOne(
            {_id : ObjectId(payload.id)},
            {$set: {
                title : payload.title,
                overview : payload.overview
            }}
        )
    }
    static async deleteMovie(payload){
        console.log(payload, 'payload models');
        return getData().collection('movies').deleteOne(
            {_id : ObjectId(payload)}
        )
    }

    static async detailMovie(payload){
        console.log(payload, 'payload');
        return getData().collection('movies').find({
            _id : ObjectId(payload)
        }).toArray()
    }
}

module.exports = Movies