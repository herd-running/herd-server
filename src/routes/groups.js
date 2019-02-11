const express = require('express')
const router = express.Router({mergeParams: true})
const groupController = require('../controllers/groups')
// const authController = require('../controllers/auth')

router.get('/', groupController.getAll)

router.get('/:groupId', groupController.getOne)

router.post('/', groupController.create)

router.delete('/:groupId', groupController.remove)




// router.use('/:groupId/users', require('../routes/users'))

//router.use('/groupId/runs', require('../routes/runs))


module.exports = router