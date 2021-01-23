import Axios from 'axios'
import { counterPsw } from '../routes/index.routes'


export const zoom = (req:any, res:any) => {
    try {Axios(`https://api.countapi.xyz/update/maslazoom/${counterPsw}?amount=1`)}
    catch(e) {console.log("Error en el contador: " + e)}
    res.status(200)
}
