const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/', authController.authenticated, authController.status, authController.isSelf)
router.post('/', authController.login)

module.exports = router