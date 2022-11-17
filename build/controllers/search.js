"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPost = exports.searchGet = void 0;
const Post_1 = require("../model/Post");
const Search_1 = require("../model/Search");
const createCollection_1 = require("./createCollection");
const axios_1 = __importDefault(require("axios"));
const index_routes_1 = require("../routes/index.routes");
const searchGet = async (req, res) => {
    try {
        (0, axios_1.default)(`https://api.countapi.xyz/update/maslabook/${index_routes_1.counterPsw}?amount=1`);
    }
    catch (e) {
        console.log("Error en el contador: " + e);
    }
    res.status(200).json({ msg: 'ok' });
};
exports.searchGet = searchGet;
const searchPost = async (req, res) => {
    try {
        const respon = req.body.result;
        const google = 'https://www.google.com/recaptcha/api/siteverify';
        const verifyURL = `${google}?secret=${index_routes_1.secretKey}&response=${respon}`;
        const axios = await (0, axios_1.default)(verifyURL);
        const data = await axios.data;
        console.log(data);
        if (!data.success)
            return res.json({ success: false, msg: "Captcha no verificado" });
        console.log("LLEGÖ", req.body);
        var wordsBrute = req.body.words.trim() || '';
        console.log("...wordsBrute... " + wordsBrute);
        var words = [];
        words = wordsBrute.split(' ');
        console.log("...words... " + words);
        let coleccion = (0, createCollection_1.createCollection)(words);
        let years = [];
        if (req.body.a2009) {
            years.push('2009');
        }
        if (req.body.a2010) {
            years.push('2010');
        }
        if (req.body.a2011) {
            years.push('2011');
        }
        if (req.body.a2012) {
            years.push('2012');
        }
        if (req.body.a2013) {
            years.push('2013');
        }
        if (req.body.a2014) {
            years.push('2014');
        }
        if (req.body.a2015) {
            years.push('2015');
        }
        if (req.body.a2016) {
            years.push('2016');
        }
        if (req.body.a2017) {
            years.push('2017');
        }
        if (req.body.a2018) {
            years.push('2018');
        }
        if (req.body.a2019) {
            years.push('2019');
        }
        if (req.body.a2020) {
            years.push('2020');
        }
        var queryYears = [];
        for (let i = 0; i < years.length; i++) {
            queryYears.push({ year: years[i] });
        }
        let months = [];
        if (req.body.one) {
            months.push('1');
        }
        if (req.body.two) {
            months.push('2');
        }
        if (req.body.three) {
            months.push('3');
        }
        if (req.body.four) {
            months.push('4');
        }
        if (req.body.five) {
            months.push('5');
        }
        if (req.body.six) {
            months.push('6');
        }
        if (req.body.seven) {
            months.push('7');
        }
        if (req.body.eight) {
            months.push('8');
        }
        if (req.body.nine) {
            months.push('9');
        }
        if (req.body.ten) {
            months.push('10');
        }
        if (req.body.eleven) {
            months.push('11');
        }
        if (req.body.twelve) {
            months.push('12');
        }
        var queryMonths = [];
        for (let i = 0; i < months.length; i++) {
            queryMonths.push({ month: months[i] });
        }
        const socialnet = req.body.socialNet;
        let socialN = [];
        if (socialnet === "fb") {
            socialN.push("fb");
        }
        else if (socialnet === "tw") {
            socialN.push("tw");
        }
        else {
            socialN.push("fb");
            socialN.push("tw");
        }
        var querySnets = [];
        for (let i = 0; i < socialN.length; i++) {
            querySnets.push({ socialNet: socialN[i] });
        }
        var twIgnore = req.body.third;
        console.log(coleccion, queryYears, querySnets, queryMonths, twIgnore);
        let objJSON = {};
        if (twIgnore) {
            objJSON = {
                $and: [{
                        $and: [{
                                $and: [{
                                        $and: [{
                                                $and: [{
                                                        $and: [{
                                                                $and: [{
                                                                        $and: [{
                                                                                $and: [{
                                                                                        $and: [{
                                                                                                $and: [{
                                                                                                        $or: coleccion[0]
                                                                                                    }],
                                                                                                $or: coleccion[1],
                                                                                            }],
                                                                                        $or: coleccion[2],
                                                                                    }],
                                                                                $or: coleccion[3],
                                                                            }],
                                                                        $or: coleccion[4],
                                                                    }],
                                                                $or: coleccion[5]
                                                            }],
                                                        $or: coleccion[6]
                                                    }],
                                                $or: queryYears
                                            }],
                                        $or: [{ $or: querySnets }]
                                    }],
                                $or: queryMonths
                            }],
                        $or: [{ $or: [{ user: 'Carlos Maslaton' }, { user: 'CarlosMaslaton' }] }],
                    }]
            };
        }
        else {
            objJSON = {
                $and: [{
                        $and: [{
                                $and: [{
                                        $and: [{
                                                $and: [{
                                                        $and: [{
                                                                $and: [{
                                                                        $and: [{
                                                                                $and: [{
                                                                                        $and: [{
                                                                                                $or: coleccion[0]
                                                                                            }],
                                                                                        $or: coleccion[1],
                                                                                    }],
                                                                                $or: coleccion[2],
                                                                            }],
                                                                        $or: coleccion[3],
                                                                    }],
                                                                $or: coleccion[4],
                                                            }],
                                                        $or: coleccion[5]
                                                    }],
                                                $or: coleccion[6]
                                            }],
                                        $or: queryYears
                                    }],
                                $or: [{ $or: querySnets }]
                            }],
                        $or: queryMonths
                    }]
            };
        }
        let limit = 30;
        let timeSearch = new Date().getTime();
        let busqueda = {
            timestamp: timeSearch,
            palabras: words,
            anyos: years,
            meses: months,
            redes: socialN,
            ignorar: twIgnore
        };
        if (queryYears[0] && queryMonths[0]) {
            try {
                await Search_1.Search.create(busqueda);
                console.log("Búsqueda guardada en DB");
            }
            catch (e) {
                console.log("Error al almacenar búsqueda: " + e);
            }
            //            var posts:any = await Post.find(objJSON).limit(limit).sort({timest:1})
            res.json({ posts: await Post_1.Post.find(objJSON).limit(limit).sort({ timest: 1 }) });
        }
        else
            res.json({ posts: [] });
    }
    catch (e) {
        console.log(e);
    }
};
exports.searchPost = searchPost;
