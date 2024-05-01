import express from 'express'

const router = express.Router();


// Routes
router.get('/api/counter', async (req, res) => {
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
    
    router.post('/api/counter/incrementcounter', async (req, res) => {
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
    
    router.post('/api/counter/decrementcounter', async (req, res) => {
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
    
    
    
    router.get('/api/myCounter', async (req, res) => {
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
    
    router.post('/api/counter/incrementmycounter', async (req, res) => {
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
    
    router.post('/api/counter/decrementmycounter', async (req, res) => {
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
    

export default router;