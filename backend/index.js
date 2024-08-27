const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5001;


app.use(cors());
app.use(express.json());

const db_url = process.env.DB_URI;
mongoose.connect(db_url, {})
const connection = mongoose.connection;
connection.once('open', () =>{
 console.log(`Db Succesfully Connected`);
})

const exerciseRoute = require('./routes/exercises');
const userRoute = require('./routes/users');

app.use('/exercises', exerciseRoute);
app.use('/users', userRoute);

app.listen(port, ()=>{
    try {
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.log(`Server is not running due to ${error}`);
    }
})