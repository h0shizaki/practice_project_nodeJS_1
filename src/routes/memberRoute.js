const route = require('express').Router()
const dbCon = require('../connection/connection')
const bcrypt = require('bcryptjs');

route.get('/register' , (req, res)=>{
    res.render('register.ejs', {
        title: 'ABS register',
        data: '',
        message:''
    })
})

route.post('/register' , async(req, res)=>{
    if(req.body.password != req.body.conPassword){
        return res.render('register.ejs', {
            title: 'ABS register',
            data: '',
            message:'Password did not match'
        })
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password , salt);

    await dbCon.query("SELECT * FROM member where username = ?", req.body.username , (err,data,field)=>{
        if(err) throw err;
        if(data.length > 0){ 
            return res.render('register.ejs', {
                title: 'ABS register',
                data: '',
                message:'Username is already exist'
            })
        }else{
            dbCon.query("INSERT INTO member(first_name, last_name, username, mem_password) VALUES(?,?,?,?)",
            [req.body.first_name, req.body.last_name, req.body.username,hashedPassword],(error,result,field)=>{
                if(error) throw error;
                console.log(result)
                res.render('login.ejs',{
                    title: 'ABS login',
                    data: '',
                    message:'Register Successfully'
                })
            })
        }
    })
})

route.get('/login' , (req,res)=>{
    res.render('login.ejs',{
        title: 'ABS login',
        data: '',
        message:''
    })
})

route.post('/login', (req,res)=>{
    res.send(req.body) 
})

module.exports = route;