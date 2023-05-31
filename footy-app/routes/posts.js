var express = require('express')
var router = express.Router()
const postsCtrl = require('../controllers/posts')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', postsCtrl.index)
router.post('/', postsCtrl.create)
router.delete('/:id', postsCtrl.delete)

module.exports = router
