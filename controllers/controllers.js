
const welcome = async(req, res, next)=>{
    console.log('its working')
    res.send("<h1>Welcome</h1>")
}

module.exports = {welcome, }