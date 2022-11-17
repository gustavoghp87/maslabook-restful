"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.counter = void 0;
const axios_1 = __importDefault(require("axios"));
const index_routes_1 = require("../routes/index.routes");
const counter = async (req, res) => {
    if (req.body.password !== index_routes_1.COUNTER_PW)
        return res.status(400).json({ msg: 'Wrong password' });
    console.log("Password correcto");
    let json = [];
    let axios, data;
    axios = await (0, axios_1.default)(`https://api.countapi.xyz/get/maslabook/${index_routes_1.counterPsw}`);
    data = await axios.data;
    json.push({ maslabook: data.value });
    axios = await (0, axios_1.default)(`https://api.countapi.xyz/get/maslastory/${index_routes_1.counterPsw}`);
    data = await axios.data;
    json.push({ maslastory: data.value });
    axios = await (0, axios_1.default)(`https://api.countapi.xyz/get/maslaboard/${index_routes_1.counterPsw}`);
    data = await axios.data;
    json.push({ maslaboard: data.value });
    axios = await (0, axios_1.default)(`https://api.countapi.xyz/get/maslazoom/${index_routes_1.counterPsw}`);
    data = await axios.data;
    json.push({ maslazoom: data.value });
    axios = await (0, axios_1.default)(`https://api.countapi.xyz/get/maslanomics/${index_routes_1.counterPsw}`);
    data = await axios.data;
    json.push({ maslanomics: data.value });
    console.log(json);
    res.status(200).json(json);
};
exports.counter = counter;
