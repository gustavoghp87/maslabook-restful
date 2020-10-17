import mongoose from 'mongoose'


const BoardSchema = new mongoose.Schema({
  nombreBoard: String,
  timeBoard: String,
  postBoard: String,
  ip: String,
  city: String,
  country: String,
  latitude: String,
  longitude: String
})

export const Board = mongoose.model('boards', BoardSchema)
