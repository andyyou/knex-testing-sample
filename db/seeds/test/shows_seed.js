
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shows').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shows').insert({
          id: 1,
          name: 'Suits',
          channel: 'USA Network',
          genre: 'Drama',
          rating: 3,
          explicit: false
        }),
        knex('shows').insert({
          id: 2,
          name: 'Game of Thrones',
          channel: 'HBO',
          genre: 'Fantasy',
          rating: 5,
          explicit: true
        }),
        knex('shows').insert({
          id: 3,
          name: 'South Park',
          channel: 'Comedy Central',
          genre: 'Comedy',
          rating: 4,
          explicit: true
        }),
        knex('shows').insert({
          id: 4,
          name: 'Mad Men',
          channel: 'AMC',
          genre: 'Drama',
          rating: 3,
          explicit: false
        })
      ]);
    });
};
