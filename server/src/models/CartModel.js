var db = require('../../config/db')
const uuid = require('uuid').v4

exports.addToCart = ({productId,userId,sellerId,productName,img,category,description,price,quantity},result) => {
    const id = uuid()
    const sql = `insert into cart (
        id,
        product_id,
        user_id,
        seller_id,
        product_name,
        img,
        category,
        description,
        price,
        quantity
    ) values(
        '${id}',
        '${productId}',
        '${userId}',
        '${sellerId}',
        '${productName}',
        '${img}',
        '${category}',
        '${description}',
        '${price}',
        '${quantity}'
    )`

    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}
