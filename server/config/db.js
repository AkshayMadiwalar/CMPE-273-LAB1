const mysql  =  require('mysql')

//connection pool
const db = mysql.createPool({
    host:"etsy.chdckafyrses.ap-south-1.rds.amazonaws.com",
    user:"admin",
    password:"akshay1998",
    database:"etsy",
    port:'3306'
})


//Single connection
// var db = mysql.createConnection({
//     host:"etsy.chdckafyrses.ap-south-1.rds.amazonaws.com",
//     user:"admin",
//     password:"akshay1998",
//     database:"etsy",
//     port:'3306'
// });

// db.connect(function(err) {
//     if (err) throw err;
// });


module.exports = db