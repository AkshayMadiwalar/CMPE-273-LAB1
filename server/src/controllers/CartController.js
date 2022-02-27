const ProductModel = require('./../models/ProductModel')
const CartModel = require('./../models/CartModel')

exports.addToCart = (req,res) => {
    const {productId,userId} = req.body

    ProductModel.findByProductId({productId},(err,data)=>{
        if(err) return res.status(500).json({message:'Server Error'})

        if(data.length > 0){
            const {seller_id,product_name,img,category,description,price,quantity} = data[0]
            CartModel.addToCart({productId,userId,sellerId:seller_id,productName:product_name,img,category,description,price,quantity},(err,data)=>{
                if(err) return res.status(500).json({message:'Server error'})
                if(data){
                    return res.json({message:'Added to Cart'})
                }
            })
        }
    })
}