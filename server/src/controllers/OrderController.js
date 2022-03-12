const OrderModel = require('./../models/OrderModel')
const CartModel = require('./../models/CartModel')
const ProductModel = require('./../models/ProductModel')
const SellerModel = require('./../models/SellerModel')

exports.placeOrder = (req,res) => {
    const {productId,userId,price,quantity} = req.body
    try {
        OrderModel.placeOrder({productId,userId,price,quantity},(err,data)=>{
            if(err) return res.status(500).json({message:"Server error"+err})
            if(data){
                const orderModel = data
                CartModel.deleteByUserId({userId},(err,data)=>{
                    if(err) return res.status(201).json({message:'Order placed, failed to remove items from cart'})
                    if(data){
                        ProductModel.incrementSales({productId,quantity},(err,data)=>{
                            if(err){
                                console.log(err)
                                return res.status(201).json({message:'Order placed, failed to update product sales'})
                            }
                            else{
                                SellerModel.incrementSales({sellerId:orderModel.sellerId,quantity},(err,data)=>{
                                    if(err){
                                        return res.status(201).json({message:'Order placed, failed to update seller sales'})
                                    }
                                    else{
                                        //--SUCCESSFULL ORDER--
                                        console.log("---success order---")
                                        return res.json(data)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"+error})
    }
}

exports.myOrders = (req,res) => {
    const {id} = req.body
    OrderModel.myOrders({id},(err,data)=>{
        if(err) return res.status(500).json({message:'Server Error'})
        return res.json(data)
    })
}
