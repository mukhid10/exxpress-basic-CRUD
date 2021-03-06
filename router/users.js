const express = require('express')
const router = express.Router()

const userController = require('../controller/user')

router.route('/users')
    .get(userController.index)
    .post(userController.store)

router.put('/users/:id', userController.update)

router.delete('/users/:userId', userController.delete)

module.exports = router