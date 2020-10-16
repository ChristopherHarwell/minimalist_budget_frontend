const db = require("../data/dbConfig.js");

module.exports = {
  find, 
  findById,
  addItem
};

function find() {
  return db("budget");
};

function findById(id) {
  return db("budget").where({ id }).first();

function addItem(itemToAdd) {
  return db("budget")
    .insert(itemToAdd)
    .then((ids) => {
      findById(ids[0]);
    })
}