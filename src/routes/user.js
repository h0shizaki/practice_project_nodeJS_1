const route = require('express').Router();
const middleware = require('../middleware/authcheck')
const dbCon = require('../connection/connection');
const bcrypt = require('bcryptjs');

route.get('/changepassword' , middleware.authMember, (req,res)=>{
    
    res.render('editselfinfo.ejs',{
        title : "Change password",
        message: "",
        mem_id: req.session.mem_id
    })
})

route.post('/changepassword', middleware.authMember, (req,res)=>{
    const id = req.session.mem_id ;

    dbCon.query("SELECT * FROM member WHERE mem_id = ?",id,async(error ,result, field)=>{
        if(error) return res.send({error: true , message: error});

        const checkPassword  = await bcrypt.compare(req.body.old_password,result[0].mem_password);
        if(!checkPassword) return res.render('editselfinfo.ejs',{
            title : "Change password",
            message: "Old password not match",
            mem_id: req.session.mem_id
        })

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.new_password,salt)

        dbCon.query("UPDATE member SET mem_password = ? WHERE mem_id = ?",[hashedPassword,id],(err,data)=>{
            if(error) return res.send({error: true, message:err}).status(500)

            req.session.destroy()
            res.render('textpage.ejs',{
                data: "",
                title: "Password have been changed",
                message: "Password changed successfully"
            })
            
        })
        

    })

})

route.get('/myorder', middleware.authMember, (req,res)=>{
    dbCon.query("SELECT * FROM ((orderlist INNER JOIN member ON member.mem_id = orderlist.mem_id AND orderlist.mem_id = ?) INNER JOIN book ON book.book_id = orderlist.book_id)",
    req.session.mem_id,(error,result,field)=>{
        if(error) return res.status(500).send({ error: true, message: error });

        res.render('myorder.ejs',{
            title : "My order",
            message: "",
            data: result
        })
    })
    
})

module.exports = route;