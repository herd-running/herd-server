exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups_comments', (table) => {
    table.increments();
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
    table.integer('group_id').references('groups.id').notNullable().onDelete('CASCADE');
    table.string('title').notNullable();
    table.text('comment').notNullable();
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('groups_comments')
};
