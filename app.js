const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/itmaster_mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const authRouter = require('./src/routes/auth')
const categoriesRouter = require('./src/routes/categories')
const productsRouter = require('./src/routes/products');
const addressRouter = require('./src/routes/address')
const phonesRouter = require('./src/routes/phone')
const postsRouter = require('./src/routes/posts')
const profileRouter = require('./src/routes/profile')
const workshopsRouter = require('./src/routes/workshops')
const brandsRouter = require('./src/routes/brands')

const cors = require('cors')

const Product = require('./src/schemas/Products');


// Middlewares (los tres):
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// API REST sólo intercambia información/datos

app.use('/api/auth', authRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/products', productsRouter)
app.use('/api/address', addressRouter)
app.use('/api/phones', phonesRouter)
app.use('/api/posts', postsRouter)
app.use('/api/profile', profileRouter)
app.use('/api/workshops', workshopsRouter)
app.use('/api/brands', brandsRouter)




app.get('/', function (req, res) {
    res.send('Bienvenido a backend')
})


app.get('/products', function (req, res) {

    // listado de productos
    res.send('Lista de productos:')
})

app.get('/products/create', function (req, res) {
    // mostrar formulario de alta de productos

    res.sendFile(__dirname + '/src/views/products-create.html')

})

app.post('/products', function (req, res) {

    // recibir datos del formulario
    // guardar en la base de datos
    
    let schema = new Product({
        ...req.body,
        seller_id: 1234
    })

    schema.save().then(() => {
        res.status(201).send({message : 'created'})
    }).catch(err => {
        console.log(err)
        res.status(422).send({message : err})
    })

})






app.listen(4001)