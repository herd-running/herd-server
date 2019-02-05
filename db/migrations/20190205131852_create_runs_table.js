
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runs', (table) => {
    table.increments();
    table.string('description');
    table.string('day').notNullable();
    table.time('time').notNullable();
    table.text('location').notNullable();
    table.string('run_type').notNullable();
    table.text('pace');
    table.string('terrain');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('runs')
};
