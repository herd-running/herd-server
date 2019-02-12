const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')
const groupController = require('../controllers/groups')
// const authController = require('../controllers/auth')

router.get('/:userId', userController.getOne)

router.post('/', userController.create)

router.get('/:userId/groups', groupController.getUsersGroups)

module.exports = router