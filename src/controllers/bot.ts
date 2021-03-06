import { Post } from '../model/Post'
import { COUNTER_PW } from '../routes/index.routes'


export const bot = async (req:any, res:any) => {

    console.log(`Recibe petición de bot a las ${Date()}`)

    const { password } = req.body; if (password!==COUNTER_PW) return res.status(400)

    let choosen:any
    const choose = async () => {
        let random:number
        random = Math.floor(Math.random() * 46066)
        const post:any = await Post.findOne({innerId:random})
        console.log("Random:", random, ", red:", post.socialNet, ", user:", post.user, ", post:", post.post)
        choosen = post
    }
    await choose()
    
    while (
        (choosen.socialNet==='tw'
            && (
                choosen.post.includes('@')
                || choosen.user.trim()!='CarlosMaslaton'
                || choosen.post.includes('soundcloud.com')
            )
        ) || choosen.post.includes('Pallarols')
    ) await choose()

    let post_text:string
    if (choosen.socialNet==='tw') post_text = choosen.post
    else {
        const url = choosen.postUrl.includes('\n')
            ? choosen.postUrl.replace('\n','')
            : choosen.postUrl
        const len = 280 - url.length - 5 + 18
        post_text = `${choosen.post.slice(0,len)} ... ${url}`
    }
    console.log("post_text:", post_text)

    if (post_text.includes('pic.twitter')) post_text = post_text.replace('pic.twitter', ' pic.twitter')
    if (post_text.includes('http:')) post_text = post_text.replace('http:', ' http:')
    //if (post_text.includes(':https:')) post_text = post_text.replace(':https:', ': https:')

    res.status(200).json(post_text)
}
