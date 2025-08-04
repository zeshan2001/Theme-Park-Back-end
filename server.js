const express = require('express')
const logger = require('morgan')
const Rides = require('./routes/rides')
const Tickets = require('./routes/tickets')
const PORT = process.env.PORT || 3001
const db = require('./db/db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/rides', Rides)
app.use('/ticket', Tickets)

app.get('/', (req, res) => {
  try {
    res.status(200).send('Landing page...')
  } catch (error) {
    res.status(500).send({ msg: 'Error creating a new issue!', error })
  }
})

app.listen(PORT, () => {
  console.log(`Express Server Running on Port`, PORT, `. . .`)
})
