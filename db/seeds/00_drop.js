
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('runs_comments').del()
    .then(() => knex('users_runs').del())
    .then(() => knex('runs').del())
    .then(() => knex('groups_comments').del())
    .then(() => knex('users_groups').del())
    .then(() => knex('groups').del())
    .then(() => knex('user').del())
}
