const {Schema, Types, model} = require('mongoose')

let Profile = new Schema({

    // _id : Types.ObjectId,

    userId : {
        type : Types.ObjectId,
        ref : 'User'
    },

    firstName : {
        type : String,
        required: true
    },

    lastName : {
        type : String,
        required : true
    },

    birthdate : {
        type : Date,
        required : true
    },

    images : {
        type: Types.ObjectId,
        ref : 'Images'
    }


})


module.exports = model('Profile', Profile)