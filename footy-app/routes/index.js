var express = require('express')
var router = express.Router()
const passport = require('passport')
const Post = require('../models/post')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const posts = await Post.find({})
  res.render('index', { title: 'Bayern Munich Team Page', posts })
})

router.get(
  '/auth/google',
  passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email'],
      // Optionally force pick account every time
      prompt: 'select_account'
    }
  )
)

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/')
  })
})

module.exports = router
