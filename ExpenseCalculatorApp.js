const express = require('express')
const fs=require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const sequelize = require('./UTIL/database')
const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')
const routes=require('./routes/user')
const router=require('./routes/expense')
const purchaseRoutes=require('./routes/purchase')
const premiumRoutes=require('./routes/premiumFeartures')
const forgotPasswordRoutes=require('./routes/forgotpasswordroutes')

const User = require('./models/expenseCalculatorModels')
const ExpenseDetails=require('./models/expenseModels')
const order=require('./models/orders')
const Forgotpassword=require('./models/forgetpassword')
const fileUrl=require('./models/fileUrl')
const accessLogStream=fs.createWriteStream(path.join(__dirname, 'access.log'),{flags:'a'})
const app = express()
app.use(cors())



app.use(bodyParser.json())



app.use(bodyParser.json())

app.use(routes)
app.use(router)
app.use(purchaseRoutes)
app.use(premiumRoutes)
app.use(forgotPasswordRoutes)
    

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,`${req.url}`))
})


User.hasMany(ExpenseDetails)
ExpenseDetails.belongsTo(User)
User.hasMany(order)
order.belongsTo(User)

User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);
User.hasMany(fileUrl)
fileUrl.belongsTo(User)



sequelize.sync(  /* {force:true}   */ )
app.listen(process.env.PORT)
