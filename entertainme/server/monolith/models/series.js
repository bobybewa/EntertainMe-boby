const { getData } = require('../../config/mongodb')
const { ObjectId } = require('mongodb')
class Series{
    static async findAll(){
        return getData().collection('tvSeries').find().toArray()
    }
    static async getSeries(payload){
        return getData().collection('tvSeries').find(
            {_id : ObjectId(payload)}
        ).toArray()
    }
    static async addSeries(payload){
        return getData().collection('tvSeries').insertOne(payload)
    }

    static async updateOne(payload){
        return getData().collection('tvSeries').updateOne(
            {_id : ObjectId(payload.id)},
            {
                $set : {
                    title : payload.title,
                    overview : payload.overview,
                    poster_path : payload.poster_path,
                    popularity : payload.popularity,
                    tags : payload.tags
                }
            }
        )
    }

    static async deleteTheSeries(payload) {
        return getData().collection('tvSeries').deleteOne(
            {_id : ObjectId(payload)},
        )
    }
}

module.exports = Series