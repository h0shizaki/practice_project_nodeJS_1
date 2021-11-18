const route = require('express').Router();
const middleware = require('../middleware/authcheck')
const dbCon = require('../connection/connection')

    route.get('/dashboard',middleware.authAdmin, (req,res)=> {
        dbCon.query("SELECT * FROM book",(error,result,field)=>{
            if(error) return res.send({message: "Error" , data: error}).status(400);

            res.render('book.ejs',{
                title:"Book dashboard",
                message: "",
                data: result
            })
            
        })
    })

    route.get('/add',middleware.authAdmin, (req,res)=>{
        res.render('addbook.ejs', {
            title: "Add book",
            message :""
        })
    } )

    route.post('/add' , middleware.authAdmin, (req,res)=>{

        dbCon.query("INSERT INTO book(book_name,book_url,book_price,book_status) VALUES(?,?,?,?)",
        [req.body.book_name,req.body.book_url,req.body.book_price,req.body.book_status], (error, result, field)=>{
            if(error) return res.send({message: "Error" , data: error}).status(400);
            
            res.send({message: "Success" , data: result})
        })

    })



module.exports = route;