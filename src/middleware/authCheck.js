class Auth{

    authMember(req,res,next){


        console.log(token + " PASS IN")
        next();
    }
}

const auth = new Auth()
module.exports = auth ;