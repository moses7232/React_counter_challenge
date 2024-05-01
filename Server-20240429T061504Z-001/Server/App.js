// express-server/app.js
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/router.js'


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/counter',router)
app.use(cors(
    {
        origin :["https://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
