const Post = require('../models/post')

const index = async (req, res) => {
  const posts = await Post.find({})
  res.render('index', { posts, title: 'All Posts' })
}

module.exports = {
  index,
  new: newPost,
  show,
  create
}
