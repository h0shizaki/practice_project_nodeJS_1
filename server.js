const express = require('express');
const path = require('path')
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');

//import route
const indexRoute = require('./src/routes/index')
const memberRoute = require('./src/routes/member');
const bookRoute = require('./src/routes/books')


app.use("/", indexRoute)
app.use("/member", memberRoute)
app.use('books', bookRoute)



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server is running on Port: ${PORT}`));