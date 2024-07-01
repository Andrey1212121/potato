const Router = require('express')
const router = new Router()
const potatocontroller = require('../controllers/potatoController')

router.post('/', potatocontroller.create)
router.get('/', potatocontroller.getAll)
router.get('/:id', potatocontroller.getOne)



module.exports = router