class Auth{

    authMember(req,res,next){
        console.log("USER PASS IN")
        next();
    }
}

const auth = new Auth()
module.exports = auth ;