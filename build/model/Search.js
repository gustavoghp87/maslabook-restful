"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const SearchSchema = new mongoose_1.default.Schema({
    timestamp: Number,
    palabras: [String],
    anyos: [String],
    meses: [String],
    redes: [String],
    ignorar: String
});
exports.Search = mongoose_1.default.model('searchs', SearchSchema);
