require('./db/db');


const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cors());


const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);




const port = process.env.NODE_ENV || 3100;


app.listen(port,() => console.log(`Server running on port ${port}`));