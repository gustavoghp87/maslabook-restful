import Axios from 'axios'
import { counterPsw } from '../routes/index.routes'


export const COUNTER_PW = process.env.COUNTER_PW

export const counter = async (req:any, res:any) => {

    if (req.body.password!==COUNTER_PW) return res.status(400).json({msg:'Wrong password'})
  
    let json = []
    let axios:any, data:any

    axios = await Axios(`https://api.countapi.xyz/get/maslabook/${counterPsw}`)
    data = await axios.data
    json.push( {maslabook: data.value} )

    axios = await Axios(`https://api.countapi.xyz/get/maslastory/${counterPsw}`)
    data = await axios.data
    json.push( {maslastory: data.value} )

    axios = await Axios(`https://api.countapi.xyz/get/maslaboard/${counterPsw}`)
    data = await axios.data
    json.push( {maslaboard: data.value} )

    axios = await Axios(`https://api.countapi.xyz/get/maslazoom/${counterPsw}`)
    data = await axios.data
    json.push( {maslazoom: data.value} )

    axios = await Axios(`https://api.countapi.xyz/get/maslanomics/${counterPsw}`)
    data = await axios.data
    json.push( {maslanomics: data.value} )

    console.log(json)
    res.status(200).json(json)
}
