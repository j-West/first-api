// File and its directory generated with
// $ knex seed:make shows_seed --env development.
// knex knows to put it in the db folder (?)

<<<<<<< HEAD
// Then seeded the db with
// $ knex seed:run --env development

exports.seed = function (knex, Promise) {
=======
// Then seeded the db with 
// $ knex seed:run --env development

exports.seed = function(knex, Promise) {
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
  return knex('shows').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('shows').insert({
          name: 'Mr. Robot',
          channel: 'USA Network',
          genre: 'drama',
<<<<<<< HEAD
          in_production: true
=======
          inProduction: true
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
        }),
        knex('shows').insert({
          name: 'The IT Crowd',
          channel: 'Netflix',
          genre: 'comedy',
<<<<<<< HEAD
          in_production: false
=======
          inProduction: false
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
        }),
        knex('shows').insert({
          name: 'Game of Thrones',
          channel: 'HBO',
          genre: 'drama',
<<<<<<< HEAD
          in_production: true
=======
          inProduction: true
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
        }),
        knex('shows').insert({
          name: 'Mad Men',
          channel: 'AMC',
          genre: 'drama',
<<<<<<< HEAD
          in_production: false
=======
          inProduction: false
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
        }),
        knex('shows').insert({
          name: 'Better Call Saul',
          channel: 'AMC',
          genre: 'dramedy',
<<<<<<< HEAD
          in_production: true
        }),
=======
          inProduction: true
        }), 
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
        knex('shows').insert({
          name: 'Cheers',
          channel: 'NBC',
          genre: 'comedy',
<<<<<<< HEAD
          in_production: false
        }),
=======
          inProduction: false,
        }), 
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
        knex('shows').insert({
          name: 'Bob\'s Burgers',
          channel: 'Fox',
          genre: 'animation',
<<<<<<< HEAD
          in_production: true
        }),
=======
          inProduction: true,
        }), 
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
        knex('shows').insert({
          name: 'Stranger Things',
          channel: 'Netflix',
          genre: 'drama',
<<<<<<< HEAD
          in_production: true
        })
      ])
    })
}
=======
          inProduction: true,
        }) 
      ]);
    });
};
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
