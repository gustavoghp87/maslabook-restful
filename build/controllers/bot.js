"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const Post_1 = require("../model/Post");
const index_routes_1 = require("../routes/index.routes");
const takeScreenshot_1 = require("../services/takeScreenshot");
const bot = async (req, res) => {
    const { password } = req.body;
    console.log(`Recibe petición de bot a las ${Date()}`);
    let post_text;
    let file;
    let choosen;
    if (password !== index_routes_1.COUNTER_PW)
        return res.status(400);
    const choose = async () => {
        let random;
        random = Math.floor(Math.random() * 46066);
        const post = await Post_1.Post.findOne({ innerId: random });
        console.log("Random:", random, ", red:", post.socialNet, ", user:", post.user, ", post:", post.post);
        choosen = post;
    };
    await choose();
    while ((choosen.socialNet === 'tw'
        && (choosen.post.includes('@')
            || choosen.user.trim() != 'CarlosMaslaton'
            || choosen.post.includes('soundcloud.com'))) || choosen.post.includes('Pallarols'))
        await choose();
    if (choosen.socialNet === 'tw') {
        post_text = choosen.post;
    }
    else {
        const url = choosen.postUrl.includes('\n')
            ? choosen.postUrl.replace('\n', '')
            : choosen.postUrl;
        const len = 280 - url.length - 5 + 18;
        post_text = `${choosen.post.slice(0, len)} ... ${url}`;
        file = await (0, takeScreenshot_1.takeScreenshot)(url);
    }
    console.log("post_text:", post_text);
    console.log("file:", file);
    if (post_text.includes('pic.twitter'))
        post_text = post_text.replace('pic.twitter', ' pic.twitter');
    if (post_text.includes('http:'))
        post_text = post_text.replace('http:', ' http:');
    //if (post_text.includes(':https:')) post_text = post_text.replace(':https:', ': https:')
    res.status(200).json({
        post_text,
        file
    });
};
exports.bot = bot;
