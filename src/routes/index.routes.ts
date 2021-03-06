import express from 'express'
import { config } from 'dotenv'; config()
import { searchGet, searchPost } from '../controllers/search'
import { story } from '../controllers/story'
import { boardsGet, boardsPost } from '../controllers/boards'
import { zoom } from '../controllers/zoom'
import { counter } from '../controllers/counter'
import { bot } from '../controllers/bot'


export const counterPsw = process.env.counterPsw
export const secretKey = process.env.secretKey
export const COUNTER_PW = process.env.COUNTER_PW

const router = express.Router()

router.get('/maslabook', searchGet)

router.post('/maslabook', searchPost)

router.get('/maslastory', story)

router.get('/maslaboard', boardsGet)

router.post('/maslaboard', boardsPost)

router.get('/maslazoom', zoom)

router.post('/counter', counter)

router.post('/bot', bot)


export default router
