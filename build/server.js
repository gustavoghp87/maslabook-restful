"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const database_1 = require("./controllers/database");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 8005);
(0, database_1.connectDB)(process.env.DB || '');
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use('/api', index_routes_1.default);
app.listen(app.get('port'), () => {
    console.log(`\nServer on port ${app.get('port')}\n`);
});
