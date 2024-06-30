//возможно роутер к типу и не нужен будет, нужно смотреть дальше как будет строится проект
const Router = require('express')
const router = new Router()
const typecontroller = require('../controllers/typecontroller')

router.post('/', typecontroller.create)
router.get('/', typecontroller.getAll)


module.exports = router