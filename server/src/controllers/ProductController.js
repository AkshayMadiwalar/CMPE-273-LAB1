const ProductModel = require('./../models/ProductModel')

exports.create = (req,res)=>{
    const {sellerId,name,category,description,price,quantity,img} = req.body
    try {
        ProductModel.createProduct({sellerId,name,category,description,price,quantity,img},(err,data)=>{
            if(err) return res.status(500).json({message:"Server error : \n"+ err})
            return res.json({message:"Product added"})
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"})
    }
}