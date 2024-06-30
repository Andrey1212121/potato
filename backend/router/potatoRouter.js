const Router = require('express')
const router = new Router()
const potatocontroller = require('../controllers/potatoController')

router.post('/', potatocontroller.create)
router.get('/', potatocontroller.getAll)


module.exports = router