// const mongoose = require('mongoose')
const {Schema, Types, model} = require('mongoose')

let Address = new Schema({

    // _id : Types.ObjectId,

    country : {
        type : String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    street : {
        type : String,
        required : true
    },

    zipcode : {
        type : String,
        required : true
    },

    userId : {
        type : Types.ObjectId,
        ref : 'User'
    },

})

module.exports = model ('Address', Address)