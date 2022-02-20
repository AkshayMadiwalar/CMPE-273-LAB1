const express = require('express')
const router = express.Router()

const SellerController = require('./../controllers/SellerController')
const ProductController = require('./../controllers/ProductController')

router.post('/add',SellerController.createSeller)
router.post('/addItem',ProductController.create)

module.exports = router