exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_groups', (table) => {
    table.increments();
    table.integer('user_id').references('users.id').notNullable();
    table.integer('group_id').references('groups.id').notNullable();
    table.boolean('is_leader').notNullable();
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_groups')
};
