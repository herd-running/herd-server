
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runs', (table) => {
    table.increments();
    table.integer('group_id').references('groups.id').notNullable();
    table.string('day').notNullable();
    table.time('time').notNullable();
    table.text('location').notNullable();
    table.string('run_type').notNullable();
    table.string('terrain').notNullable();
    table.string('pace');
    table.string('distance')
    table.text('description');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('runs')
};
