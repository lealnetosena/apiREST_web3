const express = require("express");
const router = express.Router();

// Conectando banco de dados
const path = require("path");
const { PATH_DB } = require("dotenv").config().parsed;
const { Database } = require("sqlite3");

const db = new Database(path.resolve(PATH_DB));

// Criar um Cliente
router.post("/", (req, res) => res.send("POST CLIENTE"));

// Recuperar Todos os Clientes
router.get("/", (req, res) => {
  const sql = "SELECT * FROM customer";
  console.log(
    db.get(sql, function (err, data) {
      console.log("arguments", err, data);
      res.send(data);
    })
  );
});

// Recurear um Cliente Específico

// Atualiza um Cliente
router.put("/", (req, res) => res.send("PUT CLIENTE"));

// Remover um Cliente
router.delete("/", (req, res) => res.send("DELETE CLIENTE"));

module.exports = router;
