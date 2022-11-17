import { config } from 'dotenv'
import mongoose from 'mongoose'

config()

export const connectDB = async (uri: string) => {
    try {
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("\nDB connected\n")
    } catch {
        "Failed DB"
    }
}
