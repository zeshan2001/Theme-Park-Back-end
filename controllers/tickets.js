const Tickets = require('../models/ticket')

const Find_TicketID_get = async (req, res) => {
  try {
    const ticket = await Tickets.findById(req.params.ticketid)
    res.status(200).send(ticket)
  } catch (error) {
    res.status(500).send({ error: 'Failed to get ticket' })
  }
}

const create_Ticket_post = async (req, res) => {
  try {
    const ticket = await Tickets.create({ ...req.body })
    res.status(200).send(ticket)
  } catch (error) {
    res.status(500).send({ error: 'Failed to create ticket' })
  }
}

const delete_Ticket_delete = async (req, res) => {
  try {
    const ticket = await Tickets.findByIdAndDelete(req.params.ticketid)
    res.status(200).send(ticket)
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete ticket' })
  }
}

module.exports = {
  Find_TicketID_get,
  create_Ticket_post,
  delete_Ticket_delete
}
