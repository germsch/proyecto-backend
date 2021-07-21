const {Schema, Types, model} = require('mongoose')


let Posts = new Schema({

    // _id : Types.ObjectId,

    creationDate : {
        type : Date,
        default : Date.now
    },

    body : {
        type : String,
        required : true
    },

    authorName : {
        type : String,
        required : true
    },

    title : {
        type : String,
        required : true
    },

    url : {
        type : String,
        required : true
    },

    description : String,

    likesCount : {
        type : Number,
        default : 0
    },

    dislikesCount : {
        type : Number,
        default : 0
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


module.exports = model('Posts', Posts)