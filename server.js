const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//import route
const indexRoute = require('./src/routes')


app.use("/", indexRoute)



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server is running on Port: ${PORT}`));