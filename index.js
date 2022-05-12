const express = require("express");
const app = express();
const petsRouter = require("./routers/pets")

app.get("/", (req, res) => res.send("Olá estou aqui"))

app.use(petsRouter)

app.listen(3000, () => console.log("Rodando..."))