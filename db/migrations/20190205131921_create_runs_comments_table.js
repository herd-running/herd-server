exports.up = function(knex, Promise) {
  return knex.schema.createTable('runs_comments', (table) => {
    table.increments();
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
    table.integer('run_id').references('runs.id').notNullable().onDelete('CASCADE');
    table.string('title').notNullable();
    table.integer('rating').notNullable();
    table.text('comment').notNullable();
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('runs_comments')
};
