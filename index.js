const express = require('express')
const createError = require('http-errors')
const morgan = require('morgan')
require('dotenv').config()
const routes = require('./routes/route')

//npm run dev <--- use this command in terminal for dev 

const PORT = 8000 || process.env.PORT
const app = express()

//middleware register
app.use(morgan('dev'))
  //serailizers
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//registering routes
app.use(routes)

//all catch route
app.use(async(req,res,next)=>{
    next(createError.NotFound())
})

app.use(async(err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message 
        }
    })
})



//listening server on port 8000
app.listen(PORT, ()=>{
    console.log(`The app is running on port ${PORT}`)
})