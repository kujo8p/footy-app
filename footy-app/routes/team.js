var express = require('express')
var router = express.Router()
const teamCtrl = require('../controllers/team')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router