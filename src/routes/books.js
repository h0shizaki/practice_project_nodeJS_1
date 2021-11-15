const route = require('express').Router();

    route.get('/', (req,res)=> {res.send('OK')})

module.exports = route;