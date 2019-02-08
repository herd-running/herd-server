
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {
          id: 1,
          name: 'Seattle Running Club',
          description: 'We are a Puget Sound-based running group that celebrates the beauty of our region and our personal potential with training, competition, and community. While the club offers a unique focus on trail running, members also rally on the road, track, and cross country course.'
        },
        {
          id: 2,
          name: 'Green Lake Running Groups',
          description: "Green Lake is one of the most popular destinations for urban runnings in the Seattle area. The Seattle Green Lake Running Group was created with the intent of creating a running community that supports and encourages a healthy and active lifestyle through group events and participation. Our goal is to try and have something for everyone and the more runners that attend events the better chance that there will be running buddies for all. Whether you're looking to increase your cardiovascular endurance, meet some new exercise buddies or have training partners for your next race you've come to the right place."
        },
        {
          id: 3,
          name: 'West Seattle Running Club',
          description: 'West Seattle Running Club is a social and casual running club for all levels. We provide support and encouragement to each other in achieving our running goals and in having fun along the way. '
        },
        {
          id: 4,
          name: 'Jill\'s Sunday Runday Group',
          description: 'Join Jill for all or part of a long run on Sunday mornings!'
        }
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('groups_id_seq', (SELECT MAX(id) FROM groups));`
        )
    })
}
