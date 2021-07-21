const {Schema, Types, model} = require('mongoose')

let Categories = new Schema({

    // _id : Types.ObjectId,

    name : {
        type : String,
        required : true,
        unique : true
    },

    categoryId : {
        required: false,
        type : Types.ObjectId,
        ref : 'Categories'
    }
})

module.exports = model('Categories', Categories)

// Producciones
// Novedades
// Contacto
// Quiénes somos
// Artículos 
// Traducciones
// Actas congresos
// Talleres
// CUH
// Fanzines