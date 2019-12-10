// a migration file describes the changes to apply to the database

// the up function describes what will be done
exports.up = function(knex) {
  // always return the call to the knex.schema
  return knex.schema.createTable("veggies", tbl => {
    // primary key, called 'id', an integer, auto-increments
    tbl.increments("veggie_id"); // pass in a name, or it defaults to id

    // .unique() is a constraint (rules we define to protect against invalid data)
    tbl
      .string("name", 255) // number is optional, sets the max length
      .notNullable()
      .unique()
      .index(); // makes searching for vegetables using this column faster
    tbl.boolean("like_it").defaultTo(false);
  });
};

// the down function describes how to revert the changes (like undo, for the schema)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("veggies");
};
