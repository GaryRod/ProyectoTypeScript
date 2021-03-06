"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    console.log('hi');
    res.send('rutas');
});
const port = 3005;
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor funcionando ${port}`);
});
