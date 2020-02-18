// describes changes
exports.up = function(knex) {
  // MUST RETURN KNEX>SCHEMA!
  return knex.schema.createTable('characters', tbl => {
    // adds ID column that auto-increments
    tbl.increments();

    tbl
      .string('name', 256)
      .notNullable()
      .index();

    tbl.string('house', 128);
    tbl.string('origin', 256);

    // booleans are normally stored as 1 for true and 0 for false
    tbl.boolean('alive').defaultTo(true);

  })
};
// describes how to undo changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters')
};
