const route = require('express').Router()

//import auth
const middleware = require('../middleware/authCheck')

//connect to DB
const dbCon = require('../connection/connection')

route.get('/', middleware.authMember,(req,res)=>res.send('Hello world'))

module.exports =  route;