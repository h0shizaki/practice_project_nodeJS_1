const route = require('express').Router()

route.get('/register' , (req, res)=>{
    res.render('register.ejs', {
        title: 'ABS register',
        data: '',
        message:''
    })
})

route.post('/register' , (req, res)=>res.send(req.body))

module.exports = route;