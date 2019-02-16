const express = require('express')
const router = express.Router({mergeParams: true})
const groupController = require('../controllers/groups')

// const authController = require('../controllers/auth')

router.get('/:groupId', groupController.getOne)

router.post('/', groupController.create)

router.delete('/:groupId', groupController.remove)


router.get('/:groupId/users', groupController.getGroupUsers)

router.post('/:groupId/users/:userId', groupController.addUserToGroup)

router.delete('/:groupId/users/:userId', groupController.removeUserFromGroup)


router.get('/:groupId/runs', groupController.getGroupRuns)


router.get('/:groupId/comments', groupController.getAllComments)

router.post('/:groupId/comments', groupController.postComment)

router.delete('/:groupId/comments/:commentId', groupController.removeComment)


module.exports = router