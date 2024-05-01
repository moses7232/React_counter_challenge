// express-server/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(
    {
        origin :["https://deploy-mern-1whq.vercel.app"],
        methods:["POST,"GET"],
        credentials:true
    }
));

// MongoDB Connection
mongoose.connect('mongodb+srv://moses1234563:scabmoses345@cluster0.xk17i49.mongodb.net/Challenge2?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define counter schema and model
const counterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
    myCount: { type: Number, default: 0 }
},{ collection: 'counters' });
const Counter = mongoose.model('Counter', counterSchema);

// Routes
app.get('/api/counter', async (req, res) => {
    console.log("Reached GET method")
    try {
        
        const counter = await Counter.findOne();
        console.log(counter);
        res.json(counter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.post('/api/counter/incrementcounter', async (req, res) => {
    try {
        let counter = await Counter.findOne();
        if (!counter) {
            counter = new Counter();
        }
        counter.count++;
        await counter.save();
        res.json(counter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.post('/api/counter/decrementcounter', async (req, res) => {
    try {
        let counter = await Counter.findOne();
        if (!counter) {
            counter = new Counter();
        }
        counter.count--;
        await counter.save();
        res.json(counter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});



app.get('/api/myCounter', async (req, res) => {
    console.log("Reached GET method")
    try {
        
        const myCount = await Counter.findOne();
        console.log(myCount);
        res.json(myCount);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.post('/api/counter/incrementmycounter', async (req, res) => {
    try {
        let myCounter = await Counter.findOne();
        if (!myCounter) {
            myCounter = new Counter();
        }
        myCounter.myCount++;
        await myCounter.save();
        res.json(myCounter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.post('/api/counter/decrementmycounter', async (req, res) => {
    try {
        let myCounter = await Counter.findOne();
        if (!myCounter) {
            myCounter = new Counter();
        }
        myCounter.myCount--;
        await myCounter.save();
        res.json(myCounter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
