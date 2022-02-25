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

exports.editProduct = (req,res) => {
    const {productId,name,category,description,price,quantity,img} = req.body
    try {
        console.log(productId,name,category,description,price,quantity,img)
        ProductModel.editProduct({productId,name,category,description,price,quantity,img},(err,data)=>{
            if(err) return res.status(500).json({message:"Server error : \n"+ err})
            if(data)
                return res.json({message:"Product updated"})
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"})
    }
}

exports.getItems = (req,res) => {
    const {sellerId} = req.body
    try {
        ProductModel.getProducts({sellerId},(err,data)=>{
            if(err)
                return res.status(500).json({message:"Server error"+err})
            if(data)
                return res.json(data)
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"+error})
    }
}