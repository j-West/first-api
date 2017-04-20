exports.seed = function(knex, Promise) {
  return knex('directors').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('directors').insert({
          name: 'Jimmy Pesto',
          gender: 'male',
          birth_year: 1947,
          twitter_handle: '@JamesPestoDirex'
        }),
        knex('directors').insert({
          name: 'Linda LaVida',
          gender: 'female',
          birth_year: 1978,
          twitter_handle: '@LaVida_loca'
        }),
        knex('directors').insert({
          name: 'Star Sneetch',
          gender: 'binary',
          birth_year: 1993,
          twitter_handle: '@sneetchbelly'
        }),
        knex('directors').insert({
          name: 'David Duchovny',
          gender: 'male',
          birth_year: 1962,
          twitter_handle: '@iwanttodirect'
        }),
        knex('directors').insert({
          name: 'Maggie Simpson',
          gender: 'female',
          birth_year: 1988,
          twitter_handle: '@permababy88'
        }), 
        knex('directors').insert({
          name: 'Gort McGoo',
          gender: 'male',
          birth_year: 1939,
          twitter_handle: '@tooldfortwitter'
        }), 
        knex('directors').insert({
          name: 'Garth Hairpin',
          gender: 'male',
          birth_year: 1974,
          twitter_handle: '@actiongarth'
        }), 
        knex('directors').insert({
          name: 'Della Ware',
          gender: 'female',
          birth_year: 1980,
          twitter_handle: '@dellacallstheshots'
        }) 
      ]);
    });
};