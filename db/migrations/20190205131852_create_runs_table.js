
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runs', (table) => {
    table.increments();
    table.integer('group_id').references('groups.id');
    table.integer('creator_id').references('users.id').notNullable();
    table.string('day');
    table.date('date');
    table.string('time').notNullable();
    table.text('location');
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.string('run_type').notNullable();
    table.string('terrain').notNullable();
    table.string('pace');
    table.string('distance')
    table.text('description');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('runs')
};
