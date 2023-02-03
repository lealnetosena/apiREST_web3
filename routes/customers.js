const express = require("express")
const router = express.Router()

// Criar um Cliente
router.post("/", (req, res) => res.send("POST CLIENTE"))

// Recuperar Todos os Clientes
router.get("/", (req, res) => res.send("GET CLIENTE"))

// Recurear um Cliente Específico


// Atualiza um Cliente
router.put("/", (req, res) => res.send("PUT CLIENTE"))

// Remover um Cliente
router.delete("/", (req, res) => res.send("DELETE CLIENTE"))

module.exports = router;