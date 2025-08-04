const mongoose = require('mongoose')

const ticketSchema = new Schema(
  {
    name: { type: String },
    purchase_date: { type: Date },
    rides: {
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
