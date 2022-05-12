const express = require("express")
const router = express.Router()

const animais = [{
    id: 0,
    nome: "Rex",
    Especies: "Cachorro"
}, {
    id: 1,
    nome: "Felix",
    Especies: "Gato"
}]

// Buscar as informações

router.get("/pets", (req, res) => {
    res.json(animais)
})

router.get("/pets/:id", (req, res) => {
    let info = req.params.id
    let pet = animais.find(pet => pet.id == info)
    res.json(pet)
})

router.post("/pets/:id/:nome/:especie", (req, res) => {
    const { id, nome, especie} = req.params
    const meuPet = {
        id: Number(id),
        nome: nome,
        especie: especie,
    }
    animais.push(meuPet)
    res.send("animal cadastrado")
})

module.exports = router