const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv/config');


app.use(cors())
app.use(express.json())

//import Routes
const postsRoute = require('./routes/post');

app.use('/posts', postsRoute)



//ROUTES



   


//connect to DB 
mongoose.connect(process.env.DB_CONNECTION, () => {

        console.log('connected to DB')
    });
    

const Port = 8080
app.listen(Port, ()=> {
    console.log(`it's alive! now listening to port ${Port}`)
});
