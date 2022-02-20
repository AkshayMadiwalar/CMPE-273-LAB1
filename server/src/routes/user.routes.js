const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthController')

router.post('/register',UserController.createUser)
router.post('/login',AuthController.login)
router.post('/update-profile',UserController.updateUser)
router.post('/add-to-favorites',UserController.addToFavorites)
router.get('/my-favorites/:id/:productId',UserController.searchFavorite)


module.exports = router