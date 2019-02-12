const express = require('express')
const router = express.Router({mergeParams: true})
const groupController = require('../controllers/groups')
const userController = require('../controllers/users')
// const authController = require('../controllers/auth')

router.get('/', groupController.getAll)

router.get('/:groupId', groupController.getOne)

router.post('/', groupController.create)

router.delete('/:groupId', groupController.remove)


router.get('/:groupId/users', userController.getGroupsUsers)


router.get('/:groupId/comments', groupController.getAllComments)

router.post('/:groupId/comments', groupController.postComment)

router.delete('/:groupId/comments/:commentId', groupController.removeComment)


module.exports = router