const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema(
  {
    name: { type: String },
    purchase_date: { type: Date },
    ride: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ride'
    }
  },
  {
    timestamps: true
  }
)

const Ticket = mongoose.model('Ticket', ticketSchema)
module.exports = Ticket
