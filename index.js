require('./db/db');


const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cors());


const authRoutes = require('./routes/auth');
const universityRoutes = require('./routes/university');
const programRoutes = require('./routes/program');
const newsRoutes = require('./routes/news');

app.use('/auth', authRoutes);
app.use('/university', universityRoutes);
app.use('/program', programRoutes);
app.use('/news', newsRoutes);



const port = process.env.NODE_ENV || 3100;


app.listen(port,() => console.log(`Server running on port ${port}`));