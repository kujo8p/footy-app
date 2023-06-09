const express = require('express')
const router = express.Router()
const statsCtrl = require('../controllers/stats')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/:id/stats', ensureLoggedIn, statsCtrl.create)

module.exports = router
