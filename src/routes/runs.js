const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')
const runController = require('../controllers/runs')
// const authController = require('../controllers/auth')

router.get('/:runId', runController.getOne)

router.post('/', runController.create)

router.delete('/:runId', runController.remove)


router.get('/:runId/users', userController.getRunUsers)


router.get('/:runId/comments', runController.getAllComments)

router.post('/:runId/comments', runController.postComment)

router.delete('/:runId/comments/:commentId', runController.removeComment)


module.exports = router