require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 3000;
app.use(cors())
app.use(bodyParser.json());
const announcementRouter = require('./routes/announcement');
const quizRouter = require('./routes/quiz');

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use('/announcement', announcementRouter);
app.use('/quiz', quizRouter);

const start = async () => {
    app.listen(port, async() => {
        try {
            await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
          
            
            });
            console.log('Connected to MongoDB');
        } catch (err) {
            console.log(err);
        }
    });
   
}

start();