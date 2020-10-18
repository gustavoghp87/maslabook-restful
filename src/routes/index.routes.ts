import express from 'express'
import { config } from 'dotenv'; config()
import { searchGet, searchPost } from '../controllers/search'
import { story } from '../controllers/story'
import { boardsGet, boardsPost } from '../controllers/boards'
import { zoom } from '../controllers/zoom'
import { counter } from '../controllers/counter'


const router = express.Router()
export const counterPsw = process.env.counterPsw
export const secretKey = process.env.secretKey

router.get('/maslabook', searchGet)

router.post('/maslabook', searchPost)

router.get('/maslastory', story)

router.get('/maslaboard', boardsGet)

router.post('/maslaboard', boardsPost)

router.get('/maslazoom', zoom)

router.post('/counter', counter)


export default router
