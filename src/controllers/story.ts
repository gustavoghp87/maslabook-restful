import Axios from 'axios'
import { counterPsw } from '../routes/index.routes'


export const story = async (req:any, res:any) => {
    try {Axios(`https://api.countapi.xyz/update/maslastory/${counterPsw}?amount=1`)}
    catch(e) {console.log("Error en el contador: " + e)}
}
