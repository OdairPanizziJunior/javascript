"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, database_1.default)();
app.get("/", (req, res) => {
    res.send("API funcionando!");
});
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
