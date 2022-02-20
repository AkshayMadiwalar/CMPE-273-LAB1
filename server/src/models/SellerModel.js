var db = require('../../config/db')
const uuid = require('uuid').v4

exports.createSeller = ({name,email,phNumber,currency,city,country},result) => {
    const id = uuid()
    const sql = `insert into seller(seller_id, name, email, ph_number, currency, city, country)
                values('${id}','${name}','${email}','${phNumber}','${currency}','${city}','${country}')`
    db.query(sql,(err,res)=>{
        if(err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}