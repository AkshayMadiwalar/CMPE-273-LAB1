var db = require('../../config/db')
const uuid = require('uuid').v4

exports.createSeller = ({ownerId,name,email,phNumber,currency,city,country},result) => {
    const id = uuid()
    const sql = `insert into seller(seller_id, owner_id, name, email, ph_number, currency, city, country)
                values('${id}','${ownerId}','${name}','','','${currency}','${city}','${country}')`
    db.query(sql,(err,res)=>{
        if(err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

exports.myShops = ({ownerId},result) => {
    const sql = `select * from seller where owner_id = '${ownerId}'`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

exports.updateSeller = ({sellerId,name,ownerName,email,phNumber,img},result) => {
    const sql = `update seller set name = '${name}', owner_name='${ownerName}', email='${email}', ph_number='${phNumber}', img='${img}' where seller_id = '${sellerId}'`
    db.query(sql,(err,res)=>{
        if(err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

exports.checkShopAvailability = ({name},result) => {
    const sql = `select * from seller where name ='${name}'`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

exports.findyByShopName = ({name},result) => {
    const sql = `select * from seller where name ='${name}'`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}