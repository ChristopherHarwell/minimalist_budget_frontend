const db = require("../database/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
  };

  function add() {
    return db("budget");
  };
