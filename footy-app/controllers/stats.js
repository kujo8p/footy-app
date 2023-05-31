const Player = require('../models/player')

const create = async (req, res) => {
  const player = await Player.findById(req.params.id)
  player.stats.push(req.body)
  try {
    await player.save()
    res.redirect(`/team/${player._id}`)
  } catch (err) {
    res.redirect(`/team/${player._id}`)
  }
}

module.exports = {
  create
}
