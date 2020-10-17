import mongoose from 'mongoose'


const SearchSchema = new mongoose.Schema({
  timestamp: Number,
  palabras: [String],
  anyos: [String],
  meses: [String],
  redes: [String],
  ignorar: String
})

export const Search = mongoose.model('searchs', SearchSchema)
