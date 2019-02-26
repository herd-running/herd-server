
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Jake', last_name: 'Hommer', username: 'jhommer', email: 'test@jake.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US', picture_url: 'https://pbs.twimg.com/profile_images/1034666205389320192/vyXJP-71_400x400.jpg'},
        {id: 2, first_name: 'Celia', last_name: 'Marshall', username: 'cmarshall', email: 'test@celia.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US', picture_url: 'https://avatars3.githubusercontent.com/u/39441243?s=460&v=4' },
        {id: 3, first_name: 'Sam', last_name: 'Violette', username: 'sviolette', email: 'test@sam.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US', picture_url: 'https://pbs.twimg.com/profile_images/959545624084480000/3Y-QocO9.jpg'},
        {id: 4, first_name: 'Katrina', last_name: 'Agustin', username: 'kagustin', email: 'test@katrina.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US', picture_url: 'https://media.licdn.com/dms/image/C5603AQHMveAU-vLiVw/profile-displayphoto-shrink_800_800/0?e=1554940800&v=beta&t=AaKrdHY4qtioJMBZI5XM6U16HiYhc9auJB39EgY_DBc'},
        {id: 5, first_name: 'Sarah', last_name: 'Lee', username: 'slee', email: 'test@sarah.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US', picture_url: 'https://media.licdn.com/dms/image/C5603AQHdvgJm1omWZw/profile-displayphoto-shrink_800_800/0?e=1554940800&v=beta&t=UreRN6TBUtTa02SRLvbMVf3oP5KagV-MCWIFmTvgHxA'},
        {id: 6, first_name: 'Lindsey', last_name: 'Hommer', username: 'lhommer', email: 'test@lindsey.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US'},
        {id: 7, first_name: 'Jill', last_name: 'Kranz', username: 'jkranz', email: 'test@jill.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US', picture_url: 'https://media.licdn.com/dms/image/C4E03AQE0AiKyLzUhUQ/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=uc6s19PPuSiTS21-t93yRDmH_fLTl_31JsANAncemHY'},
        {id: 8, first_name: 'Celia', last_name: 'Marshall', username: 'test', email: 'test@celia.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US', picture_url: 'https://avatars3.githubusercontent.com/u/39441243?s=460&v=4' }
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
        )
    })
}
