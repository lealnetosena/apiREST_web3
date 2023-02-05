const db = require("../infra/connection");
const {ulid} = require("ulid")

class Customer {
  create(data, callback) {
    const {id, name, email, birthday, cpf, typeAccount} = data
    const sql = `INSERT INTO customer (
            id, name, email, birthday, cpf, typeAccount
          ) 
          values ('${ulid()}', '${name}', '${email}', '${birthday}', '${cpf}', '${typeAccount}')`;
    db.run(sql, callback);
  }

  findAll(callback) {
    const sql = "SELECT * FROM customer";
    db.all(sql, callback);

  }

  findOne(id,callback) {

    const sql = `SELECT * FROM customer where id = '${id}'`;
    console.log(sql);
    db.get(sql, callback);
  }

  delete(id, callback){


    const sql = `DELETE FROM customer WHERE id = '${id}'`
  
    db.run(sql, callback)


    
  }
  updatePartial(id, data, callback) {
    let customerData = Object.entries(data);
    let fields = [];
    for (let i = 0; i < customerData.length; i++) {
      fields.push(`${customerData[i][0]} = '${customerData[i][1]}'`);
    }

    const sql = `UPDATE customer SET 
                    ${fields.join(",")}
                WHERE
                    id = '${id}'`;

    db.run(sql, callback);
    console.log(sql)
  }

}

module.exports = new Customer();
