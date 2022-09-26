const express = require('express')
const app = express()
const port = 3000

const bodyParser= require('body-parser')

const mongoose = require('mongoose')

const serieModel = require('./series')
const filmesModel = require('./filmes')

//const routes = require('./routes')

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
    id:5,
    title: "serie nova",
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

//rotas provisórias
app.get('/', (req,res)=>{
    res.statusCode=200
    res.send('rota home')
})

app.get('/series', (req,res)=>{
    res.statusCode=200
 var series= Series.find({}).then(series => {
       res.json(series)
    }).catch((err)=>{
        console.log(err)
    })
})



app.get('/serie/:id', (req, res)=>{
 res.statusCode=200
 var id = req.params.id
 Series.find({'id':id}).then(serie =>{
    res.send(serie)
}).catch((err)=>{
    console.log(err)
})

})



//to do
/*
app.get('/serie/:author', (req, res)=>{
    res.statusCode=200
    var author = req.params.author
Series.findOne({'author': author}).then(serie=>{
    console.log(serie)
    //res.send(serie)
}).catch(err =>{
    console.log(err)
})

})
*/

app.post('/series', (req, res)=>{
    const novaSerie = {
        id:req.body.id,
        title:req.body.title,
        author: req.body.author
}
 new Series(novaSerie)
 .save().then(()=>{
        console.log("Serie salva!")
    }).catch((err)=>{
        console.log("ocorreu um erro", err)
    })
})

/*não funcionou
app.delete('/serie/:id', (req, res)=>{
    res.statusCode=200
    var id = req.params.id
Series.findByIdAndDelete({id}).then(() =>{
    console.log("Deletado com sucesso!")
}).catch((err)=>{
    console.log("ocorreu um erro!")
})

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

