const { getData } = require('../../config/mongodb')
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
                overview : payload.overview,
                poster_path : payload.poster_path,
                popularity : payload.popularity,
                tags : payload.tags
            }}
        )
    }
    static async deleteMovie(payload){
        return getData().collection('movies').deleteOne(
            {_id : ObjectId(payload)}
        )
    }

    static async detailMovie(payload){
        return getData().collection('movies').find({
            _id : ObjectId(payload)
        }).toArray()
    }
}

module.exports = Movies