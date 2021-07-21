const {Schema, model} = require('mongoose')

let Brands = new Schema ({
    
    name : {
        type: String,
        required : true,
        unique : true
    },

    
    


})


module.exports = model('Brands', Brands)