import express from 'express'
import { config } from 'dotenv'; config()
import { searchGet, searchPost } from '../controllers/search'
import { story } from '../controllers/story'
import { boardsGet, boardsPost } from '../controllers/boards'
import { zoom } from '../controllers/zoom'
import { counter } from '../controllers/counter'
import { bot } from '../controllers/bot'
import path from 'path'
import fs from 'fs'

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

router.get('/franktv', (req: any, res: any) => {
    const jsonString = fs.readFileSync(path.resolve('./src/data/storage.json'))
    const customer = JSON.parse(jsonString.toString());
    res.json(customer)
})

export default router
