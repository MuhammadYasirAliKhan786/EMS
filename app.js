const express = require('express')
const app = express()
require('dotenv').config();
const port = 5000;
const cors = require('cors');

const connectDb = require('./db/connection')
const router = require('./routes/routes')



app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))


//Main Route
app.use('/api/v1',router )

//Start Server
const start = async () =>{
    try {
        await connectDb('mongodb+srv://yasirali:.adgjmKHAN5541842@cluster0.nezlrhw.mongodb.net/crudCourse?retryWrites=true&w=majority');
        app.listen(port, (req, res) =>{
            console.log('You are listening to port: ', port);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
