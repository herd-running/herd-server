exports.up = function(knex, Promise) {
  return knex.schema.createTable('runs_comments', (table) => {
    table.increments();
    table.integer('user_id').references('user.id').notNullable();
    table.integer('run_id').references('runs.id').notNullable();
    table.string('title').notNullable();
    table.integer('rating').notNullable();
    table.text('comment').notNullable();
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('runs_comments')
};
