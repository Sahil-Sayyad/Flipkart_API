//importing required packages 
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mogoose');
const app = express();
const port = process.env.PORT;
connectDB();
// parsing json and form data 
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// handled both routes 
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/product', require('./routes/productRoute'));
//start the server 
app.listen(port, (err)=>{
    if(err) return console.log(err);
    console.log(`Server is running on port ${port}`);
})
