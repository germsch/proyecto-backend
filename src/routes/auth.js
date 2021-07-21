const router = require('express').Router()
const path = require('path')
const User = require('../schemas/User')
const nodemailer = require('nodemailer')



router.get('/register', function (req, res) {

    // devolver un formulario HTML

    let file = path.resolve('src', 'views', 'register.html')
    
    // console.log(file)

    res.sendFile(file)

})

//localhost:4000/confirm?token=5bd78e9f6e60b925c5a71f692b746adb
router.get('/confirm', function (req, res) {

  User.findByToken(req.query.token)
      
      .then(function (result) {
        
        if (result) {
          return res.send('Confirmado!')
        }
        return res.send('No se ha encontrado el usuario')
      })

      .catch(function (err) {
        console.log(err.message)
        return res.send('Error :(')
      })  
})



router.post('/register', async function (req, res) {
    
  let user = new User(req.body)
  
  user.save().then(async u => {
        
      // let token = md5(req.body.email + Date.now())

    // console.log(token)

    let testAccount = await nodemailer.createTestAccount();

  
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });

  
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', 
    to: "bar@example.com, baz@example.com", 
    subject: "Has completado tu registro exitosamente", 
    text: "Bienvenido a nuestro sistema",
    html: `
            <a href="http://localhost:4000/confirm?token=${u.confirmationToken}">
            Confirmar cuenta 
            </a>
            <b>Bienvenido a nuestro sistema</b>`, 
  });

  console.log("Message sent: %s", info.messageId);
  
  
  return res.send(nodemailer.getTestMessageUrl(info))


}).catch(err => {
  console.log(err)
  return res.send('Error!')
})


})


module.exports = router