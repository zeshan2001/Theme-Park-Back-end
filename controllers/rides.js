const { deleteModel } = require('mongoose')
const Ride = require('../models/ride')

const RidesList_get = async (req, res) => {
  try {
    const rides = await Ride.find()
    res.status(200).send(rides)
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch rides' })
  }
}
const Find_RideID_get = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.rideid)
    res.status(200).send(ride)
  } catch (error) {
    res.status(500).send({ error: 'Failed to get rides' })
  }
}

module.exports = {
  RidesList_get,
  Find_RideID_get
}
