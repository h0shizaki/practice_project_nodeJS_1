const express = require('express');
const path = require('path')
const dotenv = require('dotenv');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const app = express();
dotenv.config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//set path
app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');

//import route
const indexRoute = require('./src/routes/index')
const memberRoute = require('./src/routes/member');
const bookRoute = require('./src/routes/books');
const dbCon = require('./src/connection/connection');

//set session
const sessionStore = new MySQLStore({
    createDatabaseTable: true,
    expiration:600000,
    columNames:{
        session_id : 'session_id',
        expires: 'expires',
        data : 'data'
    },
    clearExpired: true,
    checkExpirationInterval: 60000

}, dbCon);

app.use( session({
    key: 'WHAT_IS_IT',
    secret: process.env.SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false ,
    cookie:{
        maxAge: 600000
    }
}))


app.use("/", indexRoute)
app.use("/member", memberRoute)
app.use('/books', bookRoute)


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server is running on Port: ${PORT}`));