const Router = require('express')
const router = new Router()
const potatoRouter = require('./potatoRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')



router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/potato', potatoRouter)


module.exports = router