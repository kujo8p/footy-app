const Player = require('../models/player')

const index = async (req, res) => {
  const players = await Player.find({})
  res.render('team/index', { name: 'All Names', players, title: 'Team Page' })
}

const newPlayer = (req, res) => {
  res.render('team/new', { title: 'Add Player', errorMsg: '' })
}

const show = async (req, res) => {
  res.render('team/show', {
    player: await Player.findById(req.params.id),
    title: 'Player Stats'
  })
}

const deletePlayer = async (req, res) => {
  console.log(req.params.id)
  await Player.findByIdAndDelete(req.params.id)
  res.redirect('/team')
}

const create = async (req, res) => {
  await Player.create(req.body)
  res.redirect('/team')
}

module.exports = {
  index,
  new: newPlayer,
  create,
  show,
  delete: deletePlayer
}
