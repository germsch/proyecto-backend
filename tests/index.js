const mongoose = require('mongoose');
const functions = require('./functions')

mongoose.connect('mongodb://localhost:27017/itmaster_mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Estamos conectados')
});

// const User = mongoose.model('User', UserSchema)





functions.findUsers()
// functions.createUser()
// functions.createCategory()