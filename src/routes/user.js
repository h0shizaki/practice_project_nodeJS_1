const route = require('express').Router();
const middleware = require('../middleware/authcheck')
const dbCon = require('../connection/connection');

route.get('/editinfo' , middleware.authMember, (req,res)=>{
    res.send(req.session)
})

module.exports = route;