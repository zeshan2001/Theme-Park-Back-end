const Rides = require('../controllers/rides')

const RidesList_get = async (req, res) => {
  try {
    const rides = await Rides.find()
  } catch (error) {}
}

module.exports = {
  RidesList_get
}
