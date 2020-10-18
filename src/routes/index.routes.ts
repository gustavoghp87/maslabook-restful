import express from 'express'
import { Board } from '../model/Board'
import Axios from 'axios'
import { config } from 'dotenv'; config()
import { search } from '../controllers/search'


const router = express.Router()
const secretKey = process.env.secretKey
const counterPsw = process.env.counterPsw

// router.get('/', async (req, res) => {
//   try {
//     Axios(`https://api.countapi.xyz/update/maslabook/${counterPsw}?amount=1`)
//   } catch(e) {console.log("Error en el contador: " + e)}
//   const posts = await Post.find({ $and: [{"socialNet":"fb"}, {"year":2048}]}).limit(11)
// })


router.post('/search', search)


router.get('/maslastory', async (req, res) => {
  try {Axios(`https://api.countapi.xyz/update/maslastory/${counterPsw}?amount=1`)}
  catch(e) {console.log("Error en el contador: " + e)}
});


router.get('/maslaboard', async (_, res) => {
  try {Axios(`https://api.countapi.xyz/update/maslaboard/${counterPsw}?amount=1`)}
  catch(e) {console.log("Error en el contador: " + e)}
  const boards = await Board.find().limit(50).sort({timeBoard:-1})
  res.json(boards)
})

router.post('/maslaboard', async (req, res) => {
  console.log(req.body)
  try {
    // const respon = req.body['g-recaptcha-response']
    // const google = 'https://www.google.com/recaptcha/api/siteverify'
    // const verifyURL = `${google}?secret=${secretKey}&response=${respon}&remoteip=${req.connection.remoteAddress}`
    // const axios = await Axios(verifyURL)
    // const data = await axios.data
    // if (!data.success) return res.json({success:false, msg: "Captcha no verificado"})

    let nombreBoard = req.body.name
    let postBoard = req.body.message
    let timeBoard = new Date().getTime()
    let ip = req.body.json1
    let city = req.body.json2
    let country = req.body.json3
    let latitude = req.body.json4
    let longitude = req.body.json5

    let board = {
      nombreBoard,
      postBoard,
      timeBoard,
      ip,
      city,
      country,
      latitude,
      longitude
    }
    try {
      if (nombreBoard && nombreBoard.length<26 && postBoard && postBoard.length<1401 && nombreBoard.indexOf('script')==-1 && postBoard.indexOf('script')==-1)
        await Board.create(board)
    } catch (err) {console.log("Error: " + err)}

    const boards = await Board.find().limit(50).sort({timeBoard:-1})
    res.json(boards)

  } catch(e) {console.log(e)}
})


router.get('/maslazoom', (req, res) => {
  try {Axios(`https://api.countapi.xyz/update/maslazoom/${counterPsw}?amount=1`)}
  catch(e) {console.log("Error en el contador: " + e)}
})


router.post('/counter', async (req, res) => {

  if (req.body.password!==process.env.COUNTER_PW) return res.status(400).json({msg:'Wrong password'})

  let json:any, axios:any, data:any

  axios = await Axios(`https://api.countapi.xyz/get/maslabook/${counterPsw}`)
  data = await axios.data
  json.push( {counter:data.value})

  axios = await Axios(`https://api.countapi.xyz/get/maslastory/${counterPsw}`)
  data = await axios.data
  json.push( {counter:data.value})

  axios = await Axios(`https://api.countapi.xyz/get/maslaboard/${counterPsw}`)
  data = await axios.data
  json.push( {counter:data.value})

  axios = await Axios(`https://api.countapi.xyz/get/maslazoom/${counterPsw}`)
  data = await axios.data
  json.push( {counter:data.value})

  axios = await Axios(`https://api.countapi.xyz/get/maslanomics/${counterPsw}`)
  data = await axios.data
  json.push( {counter:data.value})

  console.log(json)
  res.status(200).json(json)
})


export default router
