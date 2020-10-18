import { config } from 'dotenv'; config()
import mongoose from 'mongoose'


export const connectDB = async (uri:string) => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("\nDB connected\n")
    } catch {"Failed DB"}
}
