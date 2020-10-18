import { Board } from '../model/Board'
import Axios from 'axios'
import { counterPsw, secretKey } from '../routes/index.routes'


export const boardsGet = async (req:any, res:any) => {
    try {Axios(`https://api.countapi.xyz/update/maslaboard/${counterPsw}?amount=1`)}
    catch(e) {console.log("Error en el contador: " + e)}
    const boards = await Board.find().limit(50).sort({timeBoard:-1})
    res.json(boards)
}

export const boardsPost = async (req:any, res:any) => {
    try {
        const respon = req.body.result
        const google = 'https://www.google.com/recaptcha/api/siteverify'
        const verifyURL = `${google}?secret=${secretKey}&response=${respon}`
        const axios = await Axios(verifyURL)
        const data = await axios.data
        if (!data.success) return res.json({success:false, msg: "Captcha no verificado"})
    
        let board = {
            nombreBoard: req.body.name,
            postBoard: req.body.message,
            timeBoard: new Date().getTime(),
            ip: req.body.json1,
            city: req.body.json2,
            country: req.body.json3,
            latitude: req.body.json4,
            longitude: req.body.json5
        }
        try {
            if (
                board.nombreBoard &&
                board.nombreBoard.length<26 &&
                board.postBoard &&
                board.postBoard.length<1401 &&
                board.nombreBoard.indexOf('script')==-1 &&
                board.postBoard.indexOf('script')==-1
            )
                await Board.create(board)
        } catch (err) {console.log("Error: " + err)}
  
        const boards = await Board.find().limit(50).sort({timeBoard:-1})
        res.json(boards)
  
    } catch(e) {console.log(e)}
}
