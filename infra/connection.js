// Conectando banco de dados
const path = require("path");
const { PATH_DB } = require("dotenv").config().parsed;
const { Database } = require("sqlite3");
module.exports = new Database(path.resolve(PATH_DB));
// const db = new Database(path.resolve(PATH_DB));

// module.exports = db;