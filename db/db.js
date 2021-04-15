const mongoose = require('mongoose');
require('dotenv').config()
mongoose
    .connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB connected')
    })
    .catch(err => {
        console.log(err)
        console.log('Error connecting DB')
    })