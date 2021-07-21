const mongoose = require('mongoose')
const User = require ('../src/schemas/User')
// const Address = require ('../src/schemas/Address')
const Category = require ('../src/schemas/Categories')
// const Comments = require ('../src/schemas/Comments')
// const Images = require ('../src/schemas/Images')
// const Newsletter = require ('../src/schemas/Newsletter')
// const Phone = require ('../src/schemas/Phone')
// const Posts = require ('../src/schemas/Posts')
// const Profile = require ('../src/schemas/Profile')
// const Workshops = require ('../src/schemas/Workshops')



module.exports = {

    findUsers() {
        // método estático o de clase:

    //     User.find().then(users => {
    //          console.log(users)
    //      }).catch(err => {
    //          console.log(err)
    //      })
    // },


    // método de instancia:

    let user = new User({email : "cinco@gmail.com"})

    user.findByEmail()
        .then(u => console.log(u))
        .catch(err => console.log(err))

    },

    createUser() {

        let newUser = new User({email : "siete@gmail.com", password : "123abc"})
      
        newUser.save()
            .then(user => {
                 console.log('El id del usuario es' + user._id)
            })
      
            .catch(err => {
                  console.error(err)
            })
      },



    createCategory() {
        
        let newCategory = new Category({
            name : "traducciones", 
            // categoryId : "mongoose.Types.ObjectId"
        })
    
        newCategory.save()
            .then(category => {
                console.log('La categoría es' + category._id)
            })
    
            .catch(err => {
                console.error(err)
            })
},

    // createAddress() {

    //     let newUser = new User({email : "cinco@gmail.com", password : "123abc"})
    
    //     newUser.save()
    //         .then(user => {
    //             console.log('El id del usuario es' + user._id)
    //         })
    
    //         .catch(err => {
    //             console.error(err)
    //         })
    // },


    // createComment() {

    //     let newUser = new User({email : "cinco@gmail.com", password : "123abc"})
    
    //     newUser.save()
    //         .then(user => {
    //             console.log('El id del usuario es' + user._id)
    //         })
    
    //         .catch(err => {
    //             console.error(err)
    //         })
    // },


    // createImage() {

    //     let newUser = new User({email : "cinco@gmail.com", password : "123abc"})
    
    //     newUser.save()
    //         .then(user => {
    //             console.log('El id del usuario es' + user._id)
    //         })
    
    //         .catch(err => {
    //             console.error(err)
    //         })
    // },


    // createNewsletter() {

    //     let newUser = new User({email : "cinco@gmail.com", password : "123abc"})
    
    //     newUser.save()
    //         .then(user => {
    //             console.log('El id del usuario es' + user._id)
    //         })
    
    //         .catch(err => {
    //             console.error(err)
    //         })
    // },



    // createPhone() {

    //     let newUser = new User({email : "cinco@gmail.com", password : "123abc"})
    
    //     newUser.save()
    //         .then(user => {
    //             console.log('El id del usuario es' + user._id)
    //         })
    
    //         .catch(err => {
    //             console.error(err)
    //         })
    // },



    // createPost() {

    //     let newUser = new User({email : "cinco@gmail.com", password : "123abc"})
    
    //     newUser.save()
    //         .then(user => {
    //             console.log('El id del usuario es' + user._id)
    //         })
    
    //         .catch(err => {
    //             console.error(err)
    //         })
    // },



    // createProfile() {

    //     let newUser = new User({email : "cinco@gmail.com", password : "123abc"})
    
    //     newUser.save()
    //         .then(user => {
    //             console.log('El id del usuario es' + user._id)
    //         })
    
    //         .catch(err => {
    //             console.error(err)
    //         })
    // },




    // createWorkshop() {

    //     let newUser = new User({email : "cinco@gmail.com", password : "123abc"})
    
    //     newUser.save()
    //         .then(user => {
    //             console.log('El id del usuario es' + user._id)
    //         })
    
    //         .catch(err => {
    //             console.error(err)
    //         })
    // },




}