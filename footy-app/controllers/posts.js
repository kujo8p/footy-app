const Post = require('../models/post')

const index = async (req, res) => {
  const posts = await Post.find({})
  res.render('/', { posts, title: 'All Posts' })
}

const create = async (req, res) => {
  await Post.create(req.body)
  res.redirect('/')
}

const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id)
  res.redirect('/')
}

module.exports = {
  index,
  create,
  delete: deletePost
}
