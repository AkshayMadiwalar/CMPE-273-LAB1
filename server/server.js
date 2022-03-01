const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

//Init Middleware
app.use(express.json({extended:false}))

app.use('/users',require('./src/routes/user.routes'))
app.use('/shop',require('./src/routes/seller.routes'))
app.use('/dashboard',require('./src/routes/dashboard.routes'))
app.use('/order',require('./src/routes/order.routes'))
app.use('/products',require('./src/routes/products.routes'))

const PORT = 8585


app.listen(PORT,(req,res)=>{
    console.log("Srever running on port 8585")
})