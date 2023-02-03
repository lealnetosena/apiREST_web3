module.exports =  function(app) {

// Criar um Usuário - HTTP POST
app.post("/", (req, res) => res.send("HTTP POST - Usuário"));

// Recuperar um Usuário - HTTP GET
app.get("/",(req, res) => res.send("HTTP GET - Usuário"));

// Atualizar um Usuário - HTTP PUT
app.put("/", (req, res) => res.send("HTTP PUT - Usuário"));

// Excluir um Usuário - HTTP DELETE
app.delete("/", (req, res) => res.send("HTTP DELETE - Usuário"));

}