// Importando Módulos (DependÊncias)
const express = require("express");
// console.log(express)

// Criando a Aplicação
const { PORT } = require("dotenv").config().parsed;
const app = express();
//console.log(app);

// Middleware
app.use(express.json())

// const bodyParser = require("body-parser")
// app.use(bodyParser.json())


// Mapeamento das Rotas
require("../routes/users")(app);

const customers = require("../routes/customers");
app.use("/customers", customers)

//users(app)
// Habilitando a Aplicação
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})