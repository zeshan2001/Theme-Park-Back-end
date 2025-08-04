const router = require('express').Router('../controllers/tickets')
const ticketsCTRL = require('../controllers/tickets')

router.get('/:ticketid', ticketsCTRL.Find_TicketID_get)
router.post('/new', ticketsCTRL.create_Ticket_post)
router.delete('/:ticketid', ticketsCTRL.delete_Ticket_delete)

module.exports = router
