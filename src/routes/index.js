const route = require('express').Router()

//import auth
const middleware = require('../middleware/authCheck')

//connect to DB
const dbCon = require('../connection/connection')

route.get('/', middleware.authMember,(req,res)=>{
    res.render('index.ejs' , {
        title: "Index",
        data: ""
    })
})

module.exports =  route;