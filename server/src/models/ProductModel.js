var db = require('../../config/db')
const uuid = require('uuid').v4

exports.createProduct = ({sellerId,name,category,description,price,quantity},result) => {
    const id = uuid()
    const sql = `insert into products(product_id,seller_id,product_name,category,description,price,quantity)
                values('${id}','${sellerId}','${name}','${category}','${description}','${price}','${quantity}')`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }
        else{
            result(null,res)
        }
    })
}

exports.findByProductId = ({productId},result) => {
    const sql = `select * from products where product_id = '${productId}'`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}