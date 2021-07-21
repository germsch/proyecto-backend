const {Schema, Types, model} = require('mongoose')

let Comments = new Schema({

    // _id : Types.ObjectId,

    body : {
        type : String,
        required : true
    },

    creationDate : {
        type : Date,
        default : Date.now
    },

    likesCount : {
        type : Number,
        default : 0
    },

    dislikesCount : {
        type : Number,
        default : 0
    },

    commentCount : {
        type : Number,
        required : true
    },
    
    userId : {
        type : Types.ObjectId,
        ref : 'User'
    },

    postId : {
        type : Types.ObjectId,
        ref : 'Posts'
    },

    parentItem : {
        type : Types.ObjectId,
        ref : 'Comments'
    }

})

module.exports = model('Comments', Comments)