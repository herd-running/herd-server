exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('runs_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('runs_comments').insert([
        {
          id: 1,
          user_id: 1,
          run_id: 1,
          title: 'Great run!',
          rating: 5,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 2,
          user_id: 2,
          run_id: 1,
          title: 'Fun run, time doesn\'t work',
          rating: 4,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 3,
          user_id: 3,
          run_id: 2,
          title: 'Great run!',
          rating: 4,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 4,
          user_id: 4,
          run_id: 2,
          title: 'Fun run, time doesn\'t work',
          rating: 2,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 5,
          user_id: 5,
          run_id: 3,
          title: 'Great run!',
          rating: 5,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 6,
          user_id: 6,
          run_id: 3,
          title: 'Fun run, time doesn\'t work',
          rating: 5,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 7,
          user_id: 7,
          run_id: 4,
          title: 'Great run!',
          rating: 4,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 8,
          user_id: 1,
          run_id: 4,
          title: 'Fun run, time doesn\'t work',
          rating: 4,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 9,
          user_id: 2,
          run_id: 5,
          title: 'Great run!',
          rating: 3,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 10,
          user_id: 3,
          run_id: 5,
          title: 'Fun run, time doesn\'t work',
          rating: 3,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 11,
          user_id: 4,
          run_id: 6,
          title: 'Great run!',
          rating: 5,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 12,
          user_id: 5,
          run_id: 6,
          title: 'Fun run, time doesn\'t work',
          rating: 5,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 13,
          user_id: 6,
          run_id: 7,
          title: 'Great run!',
          rating: 4,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 14,
          user_id: 7,
          run_id: 7,
          title: 'Fun run, time doesn\'t work',
          rating: 4,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 15,
          user_id: 1,
          run_id: 8,
          title: 'Great run!',
          rating: 4,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 16,
          user_id: 2,
          run_id: 8,
          title: 'Fun run, time doesn\'t work',
          rating: 2,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 17,
          user_id: 3,
          run_id: 9,
          title: 'Great run!',
          rating: 5,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 18,
          user_id: 4,
          run_id: 9,
          title: 'Fun run, time doesn\'t work',
          rating: 4,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 19,
          user_id: 5,
          run_id: 10,
          title: 'Great run!',
          rating: 3,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 20,
          user_id: 6,
          run_id: 10,
          title: 'Fun run, time doesn\'t work',
          rating: 4,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 21,
          user_id: 7,
          run_id: 11,
          title: 'Great run!',
          rating: 4,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 22,
          user_id: 1,
          run_id: 11,
          title: 'Fun run, time doesn\'t work',
          rating: 3,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
        {
          id: 23,
          user_id: 2,
          run_id: 12,
          title: 'Great run!',
          rating: 5,
          comment: 'I really enjoyed this group of people. We had a great time on Saturday and I felt very welcome! I will be back!'
        },
        {
          id: 24,
          user_id: 3,
          run_id: 12,
          title: 'Fun run, time doesn\'t work',
          rating: 4,
          comment: 'This was a great run, but the time just doesnt work for me to make it.'
        },
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('runs_comments_id_seq', (SELECT MAX(id) FROM runs_comments));`
        )
    })
}