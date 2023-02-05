const db = require("../infra/connection");
const Customer = require("../dao/customer");
console.log(Customer)

exports.createOne = (req, res) => {

  Customer.create(req.body, function (err) {
    if (err) {
      res.status(400).send({ err });
    } else {
      res.status(201).send("criado");
    }
  });
  
};
exports.getAll = (req, res) => {
  Customer.findAll((err, data) => res.send(data));
};
exports.getOne = (req, res) => {
  Customer.findOne(req.params.id, (err, data) => {
    if (!data) {
      res.status(404).send({ err: "customer not found"});
    }
    res.status(201).send(data);
  })

};
exports.changeOne = (req, res) => {
  Customer.updatePartial(req.params.id, req.body, (err) => {
    if (err) {
        console.log(err)
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });
};
exports.removeOne = (req, res) => {
Customer.delete(req.params.id, (err) => {
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
