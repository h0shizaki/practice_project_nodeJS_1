class Auth{

    authMember(req,res,next){
        if(!req.session.isAuth || req.session.isAuth === undefined) 
        return res.render('textpage.ejs',{
            message:"Please login"
        })

        next();
    }

    authAdmin(req,res,next){

        if(!req.session.isAuth || req.session.isAuth === undefined) return res.status(401).redirect('/')
        if(req.session.permission == 0){
            return res.render('textpage.ejs',{
                message:"Access Deinied"
            })
        }

        next()
    }
}

const auth = new Auth()
module.exports = auth ;