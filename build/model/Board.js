"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BoardSchema = new mongoose_1.default.Schema({
    nombreBoard: String,
    timeBoard: String,
    postBoard: String,
    ip: String,
    city: String,
    country: String,
    latitude: String,
    longitude: String
});
exports.Board = mongoose_1.default.model('boards', BoardSchema);
