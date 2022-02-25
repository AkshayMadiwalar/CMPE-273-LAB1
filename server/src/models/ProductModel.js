var db = require('../../config/db')
const uuid = require('uuid').v4

exports.createProduct = ({sellerId,name,category,description,price,quantity,img},result) => {
    const id = uuid()
    const sql = `insert into products(product_id,seller_id,product_name,category,description,price,quantity,img)
                values('${id}','${sellerId}','${name}','${category}','${description}','${price}','${quantity}','${img}')`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }
        else{
            result(null,res)
        }
    })
}

exports.editProduct = ({productId,name,category,description,price,quantity,img},result) => {
    const sql = `update products set product_name = '${name}', category='${category}', description = '${description}',
                    price='${price}', quantity='${quantity}', img='${img}' where product_id = '${productId}'`
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

exports.getProducts = ({sellerId},result) => {
    const sql = `select * from products where seller_id = '${sellerId}'`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}