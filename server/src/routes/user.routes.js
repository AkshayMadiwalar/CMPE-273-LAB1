const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthController')
const auth = require('../../middleware/auth')

router.post('/register',UserController.createUser)
router.post('/login',AuthController.login)
router.post('/update-profile',auth,UserController.updateUser)
router.post('/add-to-favorites',auth,UserController.addToFavorites)
router.post('/remove-from-favorites',auth,UserController.removeFromFavorites)
router.get('/my-favorites/:id/:productId',auth,UserController.searchFavorite)

//auth 
router.post('/auth',auth,AuthController.getUserDetails)


module.exports = router