var express = require('express')
var router = express.Router()
const teamCtrl = require('../controllers/team')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/', teamCtrl.index)
router.get('/new', teamCtrl.new)
router.get('/:id', teamCtrl.show)
router.post('/', teamCtrl.create)
router.delete('/:id', teamCtrl.delete)

module.exports = router
