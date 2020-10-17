import { config } from 'dotenv'; config()
import mongoose from 'mongoose'


const uri = process.env.DB || ''

export const connectDB = mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
