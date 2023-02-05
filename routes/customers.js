const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer");

console.log(customerController)

// Criar um Cliente
router.post("/", customerController.createOne);

// Recuperar Todos os Clientes
router.get("/", customerController.getAll );

// Recurear um Cliente Específico
router.get("/:id", customerController.getOne);

// Atualiza um Cliente
router.patch("/:id", customerController.changeOne );

// Remover um Cliente
router.delete("/:id",customerController.removeOne );

module.exports = router;
