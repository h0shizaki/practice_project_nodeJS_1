const route = require('express').Router()
const middleware = require('../middleware/authcheck')
const dbCon = require('../connection/connection')

route.get('/' , middleware.authAdmin, (req,res)=>{
    res.render('admin.ejs' , {
        title: "ABS Admin",
        message:"Welcome admin",
        data: ""
    })
})


module.exports = route;