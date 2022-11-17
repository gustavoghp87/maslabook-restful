"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.story = void 0;
const axios_1 = __importDefault(require("axios"));
const index_routes_1 = require("../routes/index.routes");
const story = async (req, res) => {
    try {
        (0, axios_1.default)(`https://api.countapi.xyz/update/maslastory/${index_routes_1.counterPsw}?amount=1`);
    }
    catch (e) {
        console.log("Error en el contador: " + e);
    }
    res.status(200);
};
exports.story = story;
