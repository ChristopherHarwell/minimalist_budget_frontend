
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('budget')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('budget').insert([
        {
          name: "Chris",
          item_name: "staco bell",
          category: "restaraunt",
          purchase_date: "10-14-2020",
          item_price: 12.08,
          outgoing_expenses: 26.36,
          incoming_finances: 576.28
        },
      ]);
    });
};
