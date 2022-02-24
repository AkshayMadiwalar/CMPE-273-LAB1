const express = require('express')
const router = express.Router()

const SellerController = require('./../controllers/SellerController')
const ProductController = require('./../controllers/ProductController')
const auth = require('../../middleware/auth')

router.post('/add',auth,SellerController.createSeller)
router.post('/update',auth,SellerController.updateShop)
router.post('/addItem',auth,ProductController.create)
router.post('/check-availablity',auth,SellerController.checkAvailability)
router.post('/byname',auth,SellerController.getShopByName)

module.exports = router