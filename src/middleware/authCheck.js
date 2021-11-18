class Auth{

    authMember(req,res,next){
        if(!req.session.isAuth || req.session.isAuth === undefined) return res.status(401).redirect('/')

        next();
    }

    authAdmin(req,res,next){
        console.log('admin ')
        // if(!req.session.isAuth || req.session.isAuth === undefined) return res.status(401).redirect('/')
        // if(req.session.permission == 0){
        //     return res.status(403).redirect('/')
        // }
        next()
    }
}

const auth = new Auth()
module.exports = auth ;