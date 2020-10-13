const db = require("../data/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
  };

  function find() {
    return db("budget");
  };
