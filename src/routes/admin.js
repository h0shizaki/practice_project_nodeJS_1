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

route.get('/dashboard', middleware.authAdmin, (req,res)=>{
    dbCon.query("SELECT * FROM member" , (error , result , field)=>{
        if(error) return res.status(503).send({error:true, message: error})

        res.render('memberlist.ejs', {
            title: "ABS Member List",
            message:"",
            data: result
        })
    })
})

route.get('/editmem/:id', middleware.authAdmin,(req,res)=>{

    dbCon.query("SELECT * FROM member WHERE mem_id = ?", req.params.id , (error,result,field)=>{
        if(error) return res.status(400).send({error:true, message:error});

        if(result.length == 0 || result === undefined) return res.status(400).send({error: true, message:"User not found"})

        res.render('editmember.ejs',{
            title: "ABS Edit User",
            message: "",
            data: result[0]
        })
    })
})

route.post('/editmem' , middleware.authAdmin , (req,res)=>{
    // console.log(req.body);
    const data = [req.body.first_name, req.body.last_name, req.body.username, req.body.permission, req.body.mem_id];
    dbCon.query("UPDATE member SET first_name = ? , last_name = ? , username = ? , mem_permission = ? WHERE mem_id = ?",data,
        (error,result,field)=>{
            if(error) return res.status(503).send({error: true, message:error});
            res.redirect('/admin/dashboard');
        }
    )
})

route.get('/deletemem/:id' , middleware.authAdmin, (req,res)=>{
    dbCon.query("DELETE FROM member WHERE mem_id = ?", req.params.id , (error,result,field)=>{
        if(error) return res.status(503).send({error: true, message:error});
        res.redirect('/admin/dashboard');
    })
})


module.exports = route;