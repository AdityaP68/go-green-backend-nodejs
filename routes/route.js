const express = require('express')
const {welcome} = require('../controllers/controllers') // or const controller = require(...).welcome
const router = express.Router()

//generic route/request handler
router.get('/', async(req, res, next)=>{
    res.send('<h1>welcome</h1>')
})

//MVC pattern .get(routeName, controllerName)
router.get('/welcome', welcome)

module.exports =  router