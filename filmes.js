const mongoose = require('mongoose')

const filmesModel = new mongoose.Schema({
    title: String,
    author: String,
    data:{type: Date, default:Date.now},
    resume: {
        content: String,
        author: String
    }
})
module.exports = filmesModel
