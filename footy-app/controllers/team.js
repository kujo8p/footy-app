const Player = require('../models/player')

const index = async (req, res) => {
  const players = await Player.find({})
  res.render('team/index', { name: 'All Names', players, title: 'Team Page' })
}

module.exports = {
  index
}
