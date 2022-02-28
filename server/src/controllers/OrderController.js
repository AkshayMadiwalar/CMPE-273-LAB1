const OrderModel = require('./../models/OrderModel')
const CartModel = require('./../models/CartModel')

exports.placeOrder = (req,res) => {
    const {productId,userId,price,quantity} = req.body
    try {
        OrderModel.placeOrder({productId,userId,price,quantity},(err,data)=>{
            if(err) return res.status(500).json({message:"Server error"})
            if(data){
                CartModel.deleteByUserId({userId},(err,data)=>{
                    if(err) res.status(201).json({message:'Order placed, failed to remove items from cart'})
                    if(data){
                        return res.json(data)
                    }
                })
            }
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"})
    }
}
