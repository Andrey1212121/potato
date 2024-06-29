const Router = require('express')
const router_new = new Router()
const potatoRouter = require('./potatoRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')



router_new.use('/user', userRouter, )
//router_new.use('/type', typeRouter, )
router_new.use('/potato', potatoRouter)


module.exports = router_new