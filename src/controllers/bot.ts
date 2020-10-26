import { Post } from '../model/Post'
import { COUNTER_PW } from '../routes/index.routes'


export const bot = async (req:any, res:any) => {

    console.log(`Recibe petición de bot a las ${Date()}`)

    const { password } = req.body
    if (password!==COUNTER_PW) return res.status(400)

    const tuits:any = await Post.find({$and: [{socialNet:'tw'}, {user:'CarlosMaslaton'}] })

    let random:number, choosen:string
    const choose = () => {
        random = Math.floor(Math.random() * tuits.length)
        console.log("Random:", random)
        choosen = tuits[random].post
        console.log("Choosen:", choosen)
        return choosen
    }
    choosen = choose()

    while (choosen.includes('@')) choose()
    // while (choosen.includes('@')) choosen = choosen.replace('@', '')

    while (choosen.includes('pic.twitter')) choosen.replace('pic.twitter', ' pic.twitter')

    res.status(200).json(choosen)
}
