
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('runs').insert([
        {
          id: 1,
          group_id: 1 ,
          description: 'Need some great hillwork? Join us on Tuesday evenings!',
          day: 'Tuesday',
          time: '5:00pm',
          location: 'Sculpture Park',
          run_type: 'Hill Repeats',
          pace: '7 - 8 minutes/mile',
          terrain: 'Gravel',
          distance: '3 miles'
        },
        {
          id: 2,
          group_id: 1 ,
          description: null,
          day: 'Saturday',
          time: '7:00am',
          location: 'Discovery Park',
          run_type: 'Trail Run',
          pace: '8 - 9 minutes/mile',
          terrain: 'Trail',
          distance: null
        },
        {
          id: 3,
          group_id: 1 ,
          description: 'Fun run in a beautiful location!',
          day: 'Tuesday',
          time: '7:00pm',
          location: 'Washington Park Arboretum',
          run_type: 'Intervals',
          pace: 'Any Pace',
          terrain: 'Pavement',
          distance: '4 miles'
        },
        {
          id: 4,
          group_id: 1,
          description: null,
          day: 'Thursday',
          time: '5:00am',
          location: 'Green Lake',
          run_type: 'Base Run',
          pace: '6 - 7 minutes/mile',
          terrain: 'Gravel',
          distance: '6 miles'
        },
        {
          id: 5,
          group_id: 1,
          description: 'A relaxed, easy walk or run on Sunday mornings. Come start your Sunday right!',
          day: 'Sunday',
          time: '10:00am',
          location: 'Burke-Gilman Trail',
          run_type: 'Walk/Run',
          pace: 'Any Pace',
          terrain: 'Pavement',
          distance: null
        },
        {
          id: 6,
          group_id: 2,
          description: 'Get your Fartlek on on Monday nights',
          day: 'Monday',
          time: '6:00pm',
          location: 'Green Lake',
          run_type: 'Fartlek',
          pace: 'Any Pace',
          terrain: 'Gravel',
          distance: null
        },
        {
          id: 7,
          group_id: 2,
          description: null,
          day: 'Saturday',
          time: '9:00am',
          location:'Green Lake' ,
          run_type: 'Recovery/Easy Run',
          pace: '9 - 10 minutes/mile',
          terrain: 'Gravel',
          distance: '3 miles'
        },
        {
          id: 8,
          group_id: 2,
          description: '',
          day: 'Wednesday',
          time: '4:00pm',
          location: 'Green Lake',
          run_type: 'Progression Run',
          pace: '6 - 7 minutes/mile',
          terrain: 'Gravel',
          distance: '6 miles'
        },
        {
          id: 9,
          group_id: 2,
          description: null,
          day: 'Friday',
          time: '6:00am',
          location: 'Green Lake',
          run_type: 'Tempo Run',
          pace: 'Any Pace',
          terrain: 'Gravel',
          distance: 'As long as you want!'
        },
        {
          id: 10,
          group_id: 3,
          description: 'Join an energetic groups of folks for a great evening run',
          day: 'Wednesday',
          time: '6:00pm',
          location: 'Alki Beach',
          run_type: 'Long Run',
          pace: '7 - 8 minutes/mile',
          terrain: 'Pavement',
          distance: '10 miles'
        },
        {
          id: 11,
          group_id: 3,
          description: '',
          day: 'Saturday',
          time: '12:00pm',
          location: 'Lincoln Park',
          run_type: 'Base Run',
          pace: '6 - 7 minutes/mile',
          terrain: 'Pavement',
          distance: '4 miles'
        },
        {
          id: 12,
          group_id: 4,
          description: 'Jill\'s Sunday Funday run! Come join the Jill train, you can do as many loops as you like!',
          day: 'Sunday',
          time: '10:00am',
          location: 'Discovery Park',
          run_type: 'Long Run',
          pace: '9 - 10 minutes/mile',
          terrain: 'Trail',
          distance: 'As much as you want!'
        }
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('runs_id_seq', (SELECT MAX(id) FROM runs));`
        )
    })
}