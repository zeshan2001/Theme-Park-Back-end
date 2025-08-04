const router = require('express').Router()

const ridesCTRL = require('../controllers/rides')

router.get('', ridesCTRL.RidesList_get)
router.get('/:rideid', ridesCTRL.Find_RideID_get)

module.exports = router
