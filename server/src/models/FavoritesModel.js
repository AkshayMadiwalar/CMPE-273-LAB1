var db = require('../../config/db')

exports.add = ({id,productId,sellerId,category,productName,description,price,quantity},result) => {
    const sql = `insert into favorites(id, product_id,seller_id,category,product_name,description,price,quantity)
                values('${id}','${productId}','${sellerId}','${category}','${productName}','${description}','${price}','${quantity}')`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

exports.findByIdAndProductId = ({id,productId},result) => {
    const sql =  `select * from favorites where id = '${id}' and product_id = '${productId}'`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}