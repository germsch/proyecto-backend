const {Schema, Types, model} = require('mongoose')

let Workshops = new Schema({

    // _id : Types.ObjectId,

    teacher : {
        type : String,
        required : true,
    },
    
    title : {
        type : String,
        required : true
    },

    attendanceDate : {
        type : Date,
        required : true
    },

    totalHours : {
        type : Number,
        required : true
    },

    url : {
        type : String,
        required : true
    },

    description : String,

    categoryId : {
        type : Types.ObjectId, 
        ref : 'Categories'
    },
})


module.exports = model('Workshops', Workshops)