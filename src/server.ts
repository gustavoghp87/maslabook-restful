import express from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes'
import { connectDB } from './controllers/database'

const app = express()

// settings
app.set('port', process.env.PORT || 8005)
connectDB

app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// routes
app.use('/', indexRoutes)

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
