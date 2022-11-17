"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardsPost = exports.boardsGet = void 0;
const Board_1 = require("../model/Board");
const axios_1 = __importDefault(require("axios"));
const index_routes_1 = require("../routes/index.routes");
const boardsGet = async (req, res) => {
    try {
        (0, axios_1.default)(`https://api.countapi.xyz/update/maslaboard/${index_routes_1.counterPsw}?amount=1`);
    }
    catch (e) {
        console.log("Error en el contador: " + e);
    }
    const boards = await Board_1.Board.find().limit(50).sort({ timeBoard: -1 });
    res.json(boards);
};
exports.boardsGet = boardsGet;
const boardsPost = async (req, res) => {
    try {
        const respon = req.body.result;
        const google = 'https://www.google.com/recaptcha/api/siteverify';
        const verifyURL = `${google}?secret=${index_routes_1.secretKey}&response=${respon}`;
        const axios = await (0, axios_1.default)(verifyURL);
        const data = await axios.data;
        if (!data.success)
            return res.json({ success: false, msg: "Captcha no verificado" });
        let board = {
            nombreBoard: req.body.name,
            postBoard: req.body.message,
            timeBoard: new Date().getTime(),
            ip: req.body.json1,
            city: req.body.json2,
            country: req.body.json3,
            latitude: req.body.json4,
            longitude: req.body.json5
        };
        try {
            if (board.nombreBoard &&
                board.nombreBoard.length < 26 &&
                board.postBoard &&
                board.postBoard.length < 1401 &&
                board.nombreBoard.indexOf('script') == -1 &&
                board.postBoard.indexOf('script') == -1)
                await Board_1.Board.create(board);
        }
        catch (err) {
            console.log("Error: " + err);
        }
        const boards = await Board_1.Board.find().limit(50).sort({ timeBoard: -1 });
        res.json(boards);
    }
    catch (e) {
        console.log(e);
    }
};
exports.boardsPost = boardsPost;
