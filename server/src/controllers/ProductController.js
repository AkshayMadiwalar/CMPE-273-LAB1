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
            console.log(err)
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

exports.getProducts = (req,res) => {
    try {
        ProductModel.getAll({},(err,data)=>{
            if(err) return res.status(500).json({message:"Server Error"})
            if(data)   return res.json(data)
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"})
    }
}

exports.getProductById = (req,res) => {
    const productId = req.params.id
    try {
        ProductModel.findByProductId({productId},(err,data)=>{
            if(err) return res.status(500).json({message:"Server error"})
            if(data)
                return res.json(data[0])
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"})
    }
}