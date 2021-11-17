const mysql = require('mysql')
const dotenv = require('dotenv');
dotenv.config();

const dbCon = mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
        database:process.env.DB_DBNAME || "mydb"
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