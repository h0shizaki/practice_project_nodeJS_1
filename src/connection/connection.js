const mysql = require('mysql')

const dbCon = mysql.createConnection({
        host: "localhost",
        user:'root',
        password:"",
        database: "myDB"
    })

dbCon.connect( (err)=> {
    if(err) {
        console.log(err);
        throw err;
    }
    else{
        console.log("Database connected success")
    }
})

module.exports = dbCon ;