"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.config)();
const connectDB = async (uri) => {
    try {
        await mongoose_1.default.connect(uri);
        console.log("\nDB connected\n");
    }
    catch {
        "Failed DB";
    }
};
exports.connectDB = connectDB;
