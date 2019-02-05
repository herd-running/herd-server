exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_runs', (table) => {
    table.increments();
    table.integer('user_id').references('user.id').notNullable();
    table.integer('run_id').references('runs.id').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_runs')
};
