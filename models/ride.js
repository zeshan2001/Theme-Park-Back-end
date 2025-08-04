const mongoose = require('mongoose')

const rideSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String }
  },
  {
    timestamps: true
  }
)

const Ride = mongoose.model('Ride', ticketSchema)
module.exports = Ride
