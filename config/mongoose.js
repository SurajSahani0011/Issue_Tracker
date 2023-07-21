const mongoose = require('mongoose');

// connecting to database

mongoose.connect('mongodb+srv://shek25095:c24FcLwEfrluTRwB@cluster0.7h4t60i.mongodb.net/?retryWrites=true&w=majority');

const db =  mongoose.connection;
// Checking Error
db.on('error',console.error.bind(console,'Connection  Error while connection to db'));

db.once('open',()=>{
    console.log('Connection to db is successful');
})