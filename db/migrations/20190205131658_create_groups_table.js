exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.integer('zip_code')
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('groups')
};
