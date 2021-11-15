const route = require('express').Router()

//import auth
const middleware = require('../middleware/authcheck')

//connect to DB
const dbCon = require('../connection/connection')

route.get('/', (req,res)=>{
    res.render('index.ejs' , {
        title: "ABS Awesome Book Shop",
        data: ""
    })
})

route.get('/home',middleware.authMember, (req,res)=>{
    res.render('home.ejs' , {
        title: "ABS Awesome Book Shop",
        data: ""
    })
})

module.exports =  route;