const mongoose = require('mongoose')

const serieModel = new mongoose.Schema({
    id:Number,
    title: String,
    author:String,
    data:{type:Date, default: Date.now},
    resume: {
        content:String,
        author:String
    }

})

module.exports = serieModel