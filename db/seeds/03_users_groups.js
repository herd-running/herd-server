
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_groups').insert([
        {id: 1, user_id: 1, group_id: 1 , is_leader: true },
        {id: 2, user_id: 2, group_id: 1 , is_leader: false },
        {id: 3, user_id: 3, group_id: 1 , is_leader: false },
        {id: 4, user_id: 4, group_id: 1 , is_leader: false },
        {id: 5, user_id: 3, group_id: 2 , is_leader: true },
        {id: 6, user_id: 4, group_id: 2 , is_leader: false },
        {id: 7, user_id: 5, group_id: 2 , is_leader: false },
        {id: 8, user_id: 6, group_id: 2 , is_leader: false },
        {id: 9, user_id: 7, group_id: 2 , is_leader: false },
        {id: 10, user_id: 2, group_id: 3 , is_leader: true },
        {id: 11, user_id: 3, group_id: 3 , is_leader: false },
        {id: 12, user_id: 1, group_id: 4 , is_leader: false },
        {id: 13, user_id: 2, group_id: 4 , is_leader: false },
        {id: 14, user_id: 3, group_id: 4 , is_leader: false },
        {id: 15, user_id: 4, group_id: 4 , is_leader: false },
        {id: 16, user_id: 5, group_id: 4 , is_leader: false },
        {id: 17, user_id: 6, group_id: 4 , is_leader: false },
        {id: 18, user_id: 7, group_id: 4 , is_leader: true }
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('users_groups_id_seq', (SELECT MAX(id) FROM users_groups));`
        )
    })
}
