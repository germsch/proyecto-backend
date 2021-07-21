const {Schema, Types, model} = require('mongoose')


let Products = new Schema({

    // _id : Types.ObjectId,

    title : {
        type : String,
        required : true
    },

    description : {
        type : String
    },

    price : {
        type : Number,
        required : true
    },

    stock : {
        type : Number,
        default : 1
    },

    sold_count :{
        type : Number,
        required : true
    },

    model : {
        type : String
    },

    brand : {
        type : String,
        required : true
    },

    seller_id : {
        type : String,
        required : true
    },

    views_count : {
        type : Number,
        default : 0
    },
     
    likesCount : {
        type : Number,
        default : 0
    },

    dislikesCount : {
        type : Number,
        default : 0
    },
    
    // categoryId : {
    //     type : Types.ObjectId,
    //     ref : 'Categories'
    // }
})


module.exports = model('Products', Products)