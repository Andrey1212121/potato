//возможно роутер к типу и не нужен будет, нужно смотреть дальше как будет строится проект
const Router = require('express')
const router = new Router()
const typecontroller = require('../controllers/typecontroller')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), typecontroller.create)
router.get('/', typecontroller.getAll)


module.exports = router