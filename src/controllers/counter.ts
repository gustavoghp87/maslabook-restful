import Axios from 'axios'
import { counterPsw } from '../routes/index.routes'


export const counter = async (req:any, res:any) => {

    if (req.body.password!==process.env.COUNTER_PW) return res.status(400).json({msg:'Wrong password'})
  
    let axios:any, data:any
  
    axios = await Axios(`https://api.countapi.xyz/get/maslabook/${counterPsw}`)
    data = await axios.data
    let json:any = {counter:data.value}
  
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
}
