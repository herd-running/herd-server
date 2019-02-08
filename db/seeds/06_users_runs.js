
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_runs').insert([
        {id: 1, user_id: 1, run_id: 1 },
        {id: 2, user_id: 1, run_id: 2 },
        {id: 3, user_id: 1, run_id: 4 },
        {id: 4, user_id: 1, run_id: 12 },
        {id: 4, user_id: 1, run_id: 5 },
        {id: 4, user_id: 1, run_id: 3 },
        {id: 5, user_id: 2, run_id: 3 },
        {id: 5, user_id: 2, run_id: 2 },
        {id: 6, user_id: 2, run_id: 5 },
        {id: 7, user_id: 2, run_id: 10 },
        {id: 8, user_id: 2, run_id: 11 },
        {id: 8, user_id: 2, run_id: 4 },
        {id: 8, user_id: 2, run_id: 12 },
        {id: 9, user_id: 3, run_id: 6 },
        {id: 10, user_id: 3, run_id: 7 },
        {id: 11, user_id: 3, run_id: 10 },
        {id: 12, user_id: 3, run_id: 11 },
        {id: 13, user_id: 3, run_id: 12 },
        {id: 13, user_id: 3, run_id: 3 },
        {id: 14, user_id: 4, run_id: 1 },
        {id: 15, user_id: 4, run_id: 4 },
        {id: 15, user_id: 4, run_id: 2 },
        {id: 15, user_id: 4, run_id: 3 },
        {id: 16, user_id: 4, run_id: 12 },
        {id: 17, user_id: 5, run_id: 12 },
        {id: 18, user_id: 5, run_id: 8 },
        {id: 19, user_id: 6, run_id: 7 },
        {id: 20, user_id: 6, run_id: 8 },
        {id: 21, user_id: 6, run_id: 9 },
        {id: 22, user_id: 6, run_id: 12 },
        {id: 23, user_id: 6, run_id: 6 },
        {id: 24, user_id: 7, run_id: 12 },
        {id: 25, user_id: 7, run_id: 8 },
        {id: 26, user_id: 7, run_id: 9 },
        {id: 26, user_id: 7, run_id: 6 },
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('users_runs_id_seq', (SELECT MAX(id) FROM users_runs));`
        )
    })
}