const route = require('express').Router()
const middleware = require('../middleware/authcheck')
const dbCon = require('../connection/connection')

route.get('/buy/:book_id', middleware.authMember, async(req,res)=>{
    let book_id = req.params.book_id ;
    await dbCon.query("SELECT * FROM book where book_id = ?",book_id, async(error , result , field)=>{
        if(!result || !req.session) return res.status(400).send({error:true, message:"No data"});    
        
        await dbCon.query("SELECT * FROM member WHERE mem_id = ?",req.session.mem_id,(err, data)=>{
            res.render('placeorder.ejs',{
                title: "Buy "+ result[0].book_name,
                message: "",
                user_data: data[0],
                book_data: result[0]
            })
        })
    
    })
})

route.post('/buy/placeorder' , middleware.authMember,(req,res)=>{
    const data = [
        req.body.mem_id,
        req.body.book_id,
        req.body.destination
    ]
    
    dbCon.query("INSERT INTO orderlist(mem_id, book_id, destination) VALUES(?,?,?)",data,(error,result,field)=>{
        if(error) return res.status(500).send({error:true, message:error})

        res.redirect('/home')
    })
})

route.get('/dashboard' , middleware.authAdmin , (req,res)=>{
    dbCon.query("SELECT * FROM ((orderlist INNER JOIN member ON member.mem_id = orderlist.mem_id) INNER JOIN book ON orderlist.book_id = book.book_id)",
    (error ,result, field)=>{
        if(error) return res.status(500).send({error: true , message:error});

        // console.log(result)

        res.render('orderdashboard.ejs', {
            title:"Order dashboard",
            message: "",
            data: result
        })

    })
})

module.exports = route