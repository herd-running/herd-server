exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups_comments').insert([
        {
          id: 1,
          user_id: 1,
          group_id: 1,
          title: 'Great group!',
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 2,
          user_id: 2,
          group_id: 1,
          title: 'Fun group',
          comment: 'Had a great run, all skill levels are welcome.'
        },
        {
          id: 3,
          user_id: 3,
          group_id: 2,
          title: 'Great group!',
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 4,
          user_id: 4,
          group_id: 2,
          title: 'Fun group',
          comment: 'Had a great run, all skill levels are welcome.'
        },
        {
          id: 5,
          user_id: 5,
          group_id: 3,
          title: 'Great group!',
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 6,
          user_id: 6,
          group_id: 3,
          title: 'Fun group',
          comment: 'Had a great run, all skill levels are welcome.'
        },
        {
          id: 7,
          user_id: 7,
          group_id: 4,
          title: 'Great group!',
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 8,
          user_id: 1,
          group_id: 4,
          title: 'Fun group',
          comment: 'Had a great run, all skill levels are welcome.'
        }
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('groups_comments_id_seq', (SELECT MAX(id) FROM groups_comments));`
        )
    })
}
