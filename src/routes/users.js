const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')
// const authController = require('../controllers/auth')

router.get('/:userId', userController.getOne)

router.post('/', userController.create)


router.get('/:userId/groups', userController.getGroups)


router.get('/:userId/runs', userController.getRuns)

module.exports = router