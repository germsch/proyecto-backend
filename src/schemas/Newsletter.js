const {Schema, Types, model} = require('mongoose')


let Newsletter = new Schema({

    // _id : Types.ObjectId,

    authorName : {
        type : String,
        required : true
    },

    title : {
        type : String,
        required : true
    },

    body : {
        type : String,
        required : true
    },

    creationDate : {
        type : Date,
        default : Date.now
    },

    images : [{
        type : Types.ObjectId,
        ref : 'Images'
    }],

    userId : {
        type : Types.ObjectId,
        ref : 'User'
    },

    categoryId : {
        type : Types.ObjectId,
        ref : 'Categories'
    }

})


module.exports = model('Newsletter', Newsletter)