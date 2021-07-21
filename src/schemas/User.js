const {Schema, model} = require('mongoose')
const md5 = require('md5')

let User = new Schema({
// module.exports = new Schema({
   
    // _id : Types.ObjectId,
   
    email :  {
       type : String,
       required : true
    },

   password : {
       type : String,
       required : true
    },

   registrationDate : {
       type : Date,
       default : Date.now
    },    

   confirmationDate : Date,

   confirmationToken : {
       type : String,
       required : true,
       default : function () {
           return md5(Date.now())
       }
   },
})

//User.findByToken() (UN SOLO PASO)
User.statics.findByToken = function (token) {
    return this.findOne({confirmationToken: token})
}

//a) let user = new User ({email : cinco@gmail.com})
//
// b) user.findByEmail()
//      .then(u => console.log(u))
//      .catch(err => console.log(err))
// (DOS PASOS)

User.methods.findByEmail = function (cb) {
    return model('User').find({ email : this.email }, cb)
}


module.exports = model('User', User)