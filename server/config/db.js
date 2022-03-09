const mysql  =  require('mysql')

const db = mysql.createPool({
    host:"etsy.chdckafyrses.ap-south-1.rds.amazonaws.com",
    user:"admin",
    password:"akshay1998",
    database:"etsy",
    port:'3306'
})



module.exports = db