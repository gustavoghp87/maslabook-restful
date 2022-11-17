"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Post = mongoose_1.default.model('posts', new mongoose_1.default.Schema({
    innerId: String,
    timest: String,
    date: String,
    postUrl: String,
    socialNet: String,
    user: String,
    post: String,
    shared: String,
    day: String,
    month: String,
    year: String,
    tags: String
}));
