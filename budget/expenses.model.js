const db = require("../data/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
  };

  function add() {
    return db("budget");
  };
