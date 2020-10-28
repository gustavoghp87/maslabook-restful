import { Post } from '../model/Post'
import { COUNTER_PW } from '../routes/index.routes'


export const bot = async (req:any, res:any) => {

    console.log(`Recibe petición de bot a las ${Date()}`)

    const { password } = req.body
    if (password!==COUNTER_PW) return res.status(400)

    const post:any = await Post.find(
        {$or: [
            {$and: [{socialNet:'tw'}, {user:'CarlosMaslaton'}]},
            {socialNet:'fb'}
        ]}
    )

    let random:number, choosen:string
    const choose = () => {
        random = Math.floor(Math.random() * post.length)
        console.log("Random:", random, ", red:", post[random].socialNet)

        if (post[random].socialNet==='tw') choosen = post[random].post
        
        if (post[random].socialNet==='fb') {
            const url = post[random].postUrl.includes('\n')
                ? post[random].postUrl.replace('\n','')
                : post[random].postUrl
            const len = 280 - url.length - 5 + 24
            choosen = `${post[random].post.slice(0,len)} ... ${url}`
        }

        console.log("Choosen:", choosen)
        return choosen
    }
    choosen = choose()

    while (choosen.includes('@')) choose()
    // while (choosen.includes('@')) choosen = choosen.replace('@', '')

    if (choosen.includes('pic.twitter')) choosen = choosen.replace('pic.twitter', ' pic.twitter')
    if (choosen.includes('.https:')) choosen = choosen.replace('.https:', '. https:')
    if (choosen.includes(':https:')) choosen = choosen.replace(':https:', ': https:')

    res.status(200).json(choosen)
}
