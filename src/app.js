// Importando Módulos (DependÊncias)
const express = require("express");
// console.log(express)

// Criando a Aplicação
const app = express();
//console.log(app);

// Mapeamento das Rotas
const users = require("../routes/users")(app);
//users(app)
// Habilitando a Aplicação
app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080")
})