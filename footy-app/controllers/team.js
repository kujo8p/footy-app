const Player = require('../models/player')

const index = async (req, res) => {
  const players = await Player.find({})
  res.render('team/index', { name: 'All Names', players, title: 'Team Page' })
}

const newPlayer = async (req, res) => {
  res.render('team/new', { title: 'Add Player', errorMsg: '' })
}

module.exports = {
  index,
  new: newPlayer
}
