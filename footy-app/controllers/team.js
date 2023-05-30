const Player = require('../models/player')

const index = async (req, res) => {
  const players = await Player.find({})
  res.render('team/index', { name: 'All Names', players, title: 'Team Page' })
}

const newPlayer = async (req, res) => {
  res.render('team/new', { title: 'Add Player', errorMsg: '' })
}

const show = async (req, res) => {
  res.render('team/show', {
    player: Player.getOne(req.params.id),
    title: 'Player Stats'
  })
}

const create = async (req, res) => {
  Player.create(req.body)
  res.redirect('/team')
}

module.exports = {
  index,
  new: newPlayer,
  create,
  show
}
