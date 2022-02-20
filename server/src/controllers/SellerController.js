const SellerModel = require('./../models/SellerModel')

exports.createSeller = (req,res) => {
    const {name,email,phNumber,currency,city,country} = req.body
    try {
        SellerModel.createSeller({name,email,phNumber,currency,city,country},(err, data)=>{
            if(err) return res.status(500).json({message:"Server error"})
            return res.json({message:"Shop created"})
        })
    } catch (error) {
        return res.status(500).json({message:"Server error"})
    }
}