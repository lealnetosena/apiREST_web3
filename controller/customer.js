const db = require("../infra/connection");
console.log(db);

exports.createOne = (req, res) => {

  const {id, name, email, birthday, cpf, typeAccount} = req.body
  const sql = `INSERT INTO customer (
                id, name, email, birthday, cpf, typeAccount
              ) 
              values ('${id}', '${name}', '${email}', '${birthday}', '${cpf}', '${typeAccount}')`
  db.run(sql, function (err) {
    if(err) {
      res.status(400).send({err})
    } else {
      res.status(201).send("criado")
    }
  })
};
exports.getAll = (req, res) => {
  const sql = "SELECT * FROM customer";
  db.all(sql, (err, data) => res.send(data));
};
exports.getOne = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const sql = `SELECT * FROM customer where id = '${id}'`;
  console.log(sql);
  db.get(sql, (err, data) => {
    if (!data) {
      res.status(404).send({ err: "customer not found"});
    }
    res.status(201).send(data);
  });
};
exports.changeOne = (req, res) => res.send("CHANGE ONE");
exports.removeOne = (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM customer WHERE id = '${id}'`

  db.run(sql, (err) => {
    if(!err) {res.status(204).end()} else{ res.send(err) }
  })
};

//alternativa de implantação
/*module.exports= {
    createOne: (req, res) => res.send("POST CLIENTE"),
    getAll : (req, res) => {
        const sql = "SELECT * FROM customer";
        console.log(
          db.get(sql, function (err, data) {
            console.log("arguments", err, data);
            res.send(data);
          })
        );
      },
    getOne : () => {},
    changeOne: (req, res) => res.send("PUT CLIENTE"),
    removeOne: (req, res) => res.send("DELETE CLIENTE")


}*/
