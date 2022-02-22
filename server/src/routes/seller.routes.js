const express = require('express')
const router = express.Router()

const SellerController = require('./../controllers/SellerController')
const ProductController = require('./../controllers/ProductController')
const auth = require('../../middleware/auth')

router.post('/add',auth,SellerController.createSeller)
router.post('/addItem',auth,ProductController.create)

module.exports = router