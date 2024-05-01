// MongoDB Connection
mongoose.connect("ENTER your UNIQUE connection string HERE")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define counter schema and model
const counterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
    myCount: { type: Number, default: 0 }
},{ collection: 'counters' });
const Counter = mongoose.model('Counter', counterSchema);
