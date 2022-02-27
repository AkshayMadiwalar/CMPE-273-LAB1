const OrderModel = require('./../models/OrderModel')

exports.placeOrder = (req,res) => {
    const {productId,userId,price,quantity} = req.body
    try {
        OrderModel.placeOrder({productId,userId,price,quantity},(err,data)=>{
            if(err) return res.status(500).json({message:"Server error"})
            if(data)
                return res.json(data)
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"})
    }
}
