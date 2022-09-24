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
/*
const serie = new Series ({
    id:3,
    title: "Sobrenatural",
    author: "Winchester"
}).save().then(()=>{
    console.log("Serie salva!")
}).catch((err)=>{
    console.log("ocorreu um erro", err)
})
*/
/*
const filme = new Filmes({
    id:32,
    title: "SuperMan",
    author: "doctor sim"
}).save().then(()=>{
    console.log("Filme salvo!")
}).catch((err)=>{
    console.log("ocorreu um erro", err)
})
*/
/*
Series.find({}).then(series => {
    console.log(series)
}).catch((err)=>{
    console.log(err)
})
*/

/*
Series.find({'_id':'632e08911ac07ecb09d3134b'}).then(serie =>{
    console.log(serie)
}).catch((err)=>{
    console.log(err)
})
*/

Series.find({'id': 3}).then(serie =>{
    console.log(serie)
}).catch((err)=>{
    console.log(err)
})

/*
Series.findOne({'author': 'Winchester'}).then(author=>{
    console.log(author)
}).catch(err =>{
    console.log(err)
})
*/

/*
Series.findByIdAndDelete('632e114bbdbf7749b6bd1d76').then(() =>{
    console.log("Deletado com sucesso!")
}).catch((err)=>{
    console.log("ocorreu um erro!")
})
*/

/*
Series.findByIdAndUpdate('632e08911ac07ecb09d3134b', {title: "foi feito update", author: "rodrigo"}).then(()=>{
    console.log("update realizado")
}).catch((err)=>{
    console.log(err)
})
*/

app.listen(port, ()=>{
    console.log("Server started port ", port)
})

