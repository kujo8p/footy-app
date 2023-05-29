var express = require('express')
var router = express.Router()
const teamCtrl = require('../controllers/team')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/', teamCtrl.index)

module.exports = router
