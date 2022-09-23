const express = require('express')
const app = express()
const port = 3000

const bodyParser= require('body-parser')

const mongoose = require('mongoose')

const serieModel = require('./series')
const filmesModel = require('./filmes')

//config body-parser

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//conexcao co mongoDB

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/cadastro_stream').then(()=>{
    console.log("conectado com sucesso!")
    }).catch((err)=>{
        console.log("ocorreu um err ", err)
})

const Series = mongoose.model('Serie', serieModel)
const Filmes = mongoose.model('filmes', filmesModel)

const serie = new Series ({
    title: "Chapolin",
    author: "Chisparito"
}).save().then(()=>{
    console.log("Serie salva!")
}).catch((err)=>{
    console.log("ocorreu um erro", err)
})

const filme = new Filmes({
    title: "twister",
    author: "dias"
}).save().then(()=>{
    console.log("Filme salvo!")
}).catch((err)=>{
    console.log("ocorreu um erro", err)
})


app.listen(port, ()=>{
    console.log("Server started port ", port)
})

