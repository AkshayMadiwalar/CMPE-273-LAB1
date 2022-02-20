const mysql  =  require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Akshay@1998",
    database:"etsy"
})

module.exports = db