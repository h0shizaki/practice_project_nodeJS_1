const route = require('express').Router()
const middleware = require('../middleware/authcheck')
const dbCon = require('../connection/connection')

route.get('/buy/:book_id', middleware.authMember, async(req,res)=>{
    let book_id = req.params.book_id ;
    await dbCon.query("SELECT * FROM book where book_id = ?",book_id, async(error , result , field)=>{
        if(!result || !req.session) return res.status(400).send({error:true, message:"No data"});    
        
        await dbCon.query("SELECT * FROM member WHERE mem_id = ?",req.session.mem_id,(err, data)=>{
            res.send({book_data: result, user_data: data})
        })
    
    })
})

module.exports = route