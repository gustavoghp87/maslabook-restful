import express from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes'
import { connectDB } from './controllers/database'
import cors from 'cors'

const app = express()

app.set('port', process.env.PORT || 8005)

connectDB(process.env.DB || '')

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', indexRoutes)

app.listen(app.get('port'), () => {
  console.log(`\nServer on port ${app.get('port')}\n`)
})
