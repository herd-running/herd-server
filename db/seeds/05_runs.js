
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('runs').insert([
        {
          id: 1,
          group_id: 1,
          creator_id: 1,
          description: 'Need some great hillwork? Join us on Tuesday evenings!',
          day: 'Tuesday',
          date: null,
          time: '5:00pm',
          location: 'Sculpture Park',
          latitude: 47.6152,
          longitude: -122.3553,
          run_type: 'Hill Repeats',
          pace: '7 - 8 minutes/mile',
          terrain: 'Gravel',
          distance: '3 miles'
        },
        {
          id: 2,
          group_id: 1,
          creator_id: 1,
          description: null,
          day: 'Saturday',
          date: null,
          time: '7:00am',
          location: 'Discovery Park',
          latitude: 47.6574,
          longitude: -122.4116,
          run_type: 'Trail Run',
          pace: '8 - 9 minutes/mile',
          terrain: 'Trail',
          distance: null
        },
        {
          id: 3,
          group_id: 1,
          creator_id: 1,
          description: 'Fun run in a beautiful location!',
          day: 'Tuesday',
          date: null,
          time: '7:00pm',
          location: 'Washington Park Arboretum',
          latitude: 47.6285,
          longitude: -122.2940,
          run_type: 'Intervals',
          pace: 'Any Pace',
          terrain: 'Pavement',
          distance: '4 miles'
        },
        {
          id: 4,
          group_id: 1,
          creator_id: 1,
          description: null,
          day: 'Thursday',
          date: null,
          time: '5:00am',
          location: 'Green Lake',
          latitude: 47.6797,
          longitude: -122.3286,
          run_type: 'Base Run',
          pace: '6 - 7 minutes/mile',
          terrain: 'Gravel',
          distance: '6 miles'
        },
        {
          id: 5,
          group_id: 1,
          creator_id: 1,
          description: 'A relaxed, easy walk or run on Sunday mornings. Come start your Sunday right!',
          day: 'Sunday',
          date: null,
          time: '10:00am',
          location: 'Burke-Gilman Trail',
          latitude: 47.6463,
          longitude: -122.3348,
          run_type: 'Walk/Run',
          pace: 'Any Pace',
          terrain: 'Pavement',
          distance: null
        },
        {
          id: 6,
          group_id: 2,
          creator_id: 3,
          description: 'Get your Fartlek on on Monday nights',
          day: 'Monday',
          date: null,
          time: '6:00pm',
          location: 'Green Lake',
          latitude: 47.6787,
          longitude: -122.3296,
          run_type: 'Fartlek',
          pace: 'Any Pace',
          terrain: 'Gravel',
          distance: null
        },
        {
          id: 7,
          group_id: 2,
          creator_id: 3,
          description: null,
          day: 'Saturday',
          date: null,
          time: '9:00am',
          location:'Green Lake' ,
          run_type: 'Recovery/Easy Run',
          latitude: 47.6713,
          longitude: -122.3428,
          pace: '9 - 10 minutes/mile',
          terrain: 'Gravel',
          distance: '3 miles'
        },
        {
          id: 8,
          group_id: 2,
          creator_id: 3, 
          description: '',
          day: 'Wednesday',
          date: null,
          time: '4:00pm',
          location: 'Green Lake',
          latitude: 47.6851,
          longitude: -122.3375,
          run_type: 'Progression Run',
          pace: '6 - 7 minutes/mile',
          terrain: 'Gravel',
          distance: '6 miles'
        },
        {
          id: 9,
          group_id: 2,
          creator_id: 3,
          description: null,
          day: null,
          date: '2019-03-05',
          time: '6:00am',
          location: 'Green Lake',
          latitude: 47.6846,
          longitude: -122.3359,
          run_type: 'Tempo Run',
          pace: 'Any Pace',
          terrain: 'Gravel',
          distance: 'As long as you want!'
        },
        {
          id: 10,
          group_id: 3,
          creator_id: 2,
          description: 'Marathon training? Join an energetic groups of folks for a great evening run',
          day: null,
          date: '2019-03-12',
          time: '6:00pm',
          location: 'Alki Beach',
          latitude: 47.5935,
          longitude: -122.3908,
          run_type: 'Long Run',
          pace: '7 - 8 minutes/mile',
          terrain: 'Pavement',
          distance: '10 miles'
        },
        {
          id: 11,
          group_id: 3,
          creator_id: 2,
          description: '',
          day: null,
          date: '2019-03-09',
          time: '12:00pm',
          location: 'Lincoln Park',
          latitude: 47.5368,
          longitude: -122.3935,
          run_type: 'Base Run',
          pace: '6 - 7 minutes/mile',
          terrain: 'Pavement',
          distance: '4 miles'
        },
        {
          id: 12,
          group_id: 4,
          creator_id: 7,
          description: 'Jill\'s Sunday Funday run! Come join the Jill train, you can do as many loops as you like!',
          day: 'Sunday',
          date: null,
          time: '10:00am',
          location: 'Discovery Park',
          latitude: 47.6609,
          longitude: -122.4153,
          run_type: 'Long Run',
          pace: '9 - 10 minutes/mile',
          terrain: 'Trail',
          distance: 'As much as you want!'
        },
        {
          id: 13,
          group_id: null,
          creator_id: 6,
          description: 'Anyone want to join me at Discovery Park tomorrow?',
          day: null,
          date: '2019-03-03',
          time: '11:00am',
          location: 'Discovery Park',
          latitude: 47.6609,
          longitude: -122.4153,
          run_type: 'Long Run',
          pace: '9 - 10 minutes/mile',
          terrain: 'Trail',
          distance: 'As much as you want!'
        },
        {
          id: 14,
          group_id: 1,
          creator_id: 1,
          description: 'I am training for a marathon and would love some company for all or part of my long runs!',
          day: 'Friday',
          date: null,
          time: '5:00pm',
          location: 'Lake Union Loop',
          latitude: 47.625912,
          longitude: -122.338470,
          run_type: 'Long Run',
          pace: '7 - 8 minutes/mile',
          terrain: 'Pavement',
          distance: '15 miles'
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