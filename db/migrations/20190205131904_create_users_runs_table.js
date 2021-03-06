exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_runs', (table) => {
    table.increments();
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
    table.integer('run_id').references('runs.id').notNullable().onDelete('CASCADE');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_runs')
};
