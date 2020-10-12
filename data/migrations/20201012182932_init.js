
exports.up = function(knex) {
    return knex.schema.createTable("budget", tbl => {
        tbl.increments();
        tbl.string("name").notNullable();
        tbl.string("item_name", 100).notNullable();
        tbl.string("category").notNullable();

        tbl.date("purchase_date").notNullable()
        tbl.float("item_price")
        tbl.float("outgoing_expenses")
        tbl.float("incoming_finances")

      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("budget");
};
