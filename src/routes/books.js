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

    route.get('/edit/:id' , middleware.authAdmin , (req,res)=>{
        const ID = req.params.id
        if( ID === undefined) return res.send("ID is undefined").status(300);

        dbCon.query("SELECT * FROM book where book_id = ?", ID ,(error,result,field)=>{
            if(error) return res.send({error: true , message: error})
            if(result.length == 0 || result === undefined) return res.send({error: true , message: "Book not found"})
        
            res.render('editbook.ejs' , {
                title: "editbook",
                message: "",
                data: result[0]
            })
        })
    })

    route.post('/edit' , middleware.authAdmin, (req,res)=>{
        dbCon.query("UPDATE book SET book_url = ?, book_name = ?, book_price = ?, book_status = ? WHERE book_id = ?",
        [req.body.book_url, req.body.book_name, req.body.book_price, req.body.book_status, req.body.book_id],
        (error,result,field) =>{
            if(error) return res.status(400).send({error: true, message:error})

            res.redirect('/books/dashboard');
        })
    })



module.exports = route;