const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const connectDataBase = require('./mongoDB/connection');
connectDataBase();


const app = express();

// MIDDLEWARE 
app.use(express.json());
app.use(cors());

// Import Route 
const tradeRoute = require('./Routes/tradeRoute');


// ROUTE 
app.use('/trade',tradeRoute);




app.listen(process.env.PORT,()=>{
    console.log("server is running on Port no "+process.env.PORT)
})