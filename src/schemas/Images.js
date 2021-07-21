const {Schema, model} = require('mongoose')

let Images = new Schema({

    // _id : Types.ObjectId,

    url : {
        type : String,
        required : true
    }

})

module.exports = model('Images', Images)