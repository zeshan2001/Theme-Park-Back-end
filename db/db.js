const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Successfully connected to MongoDB . . .`)
  } catch (error) {
    console.error('Connection error', error.message)
  }
}
connect()
const db = mongoose.connection
module.exports = db
