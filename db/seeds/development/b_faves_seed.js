
<<<<<<< HEAD
exports.seed = function (knex, Promise) {
=======
exports.seed = function(knex, Promise) {
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
  return knex('favorites').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('favorites').insert({
          show_id: 3
        }),
        knex('favorites').insert({
          show_id: 1
        }),
        knex('favorites').insert({
          show_id: 1
        }),
        knex('favorites').insert({
          show_id: 4
        }),
        knex('favorites').insert({
          show_id: 6
<<<<<<< HEAD
        }),
        knex('favorites').insert({
          show_id: 7
        }),
        knex('favorites').insert({
          show_id: 3
        }),
        knex('favorites').insert({
          show_id: 2
        })
      ])
    })
}
=======
        }), 
        knex('favorites').insert({
          show_id: 7
        }), 
        knex('favorites').insert({
          show_id: 3
        }), 
        knex('favorites').insert({
          show_id: 2
        }) 
      ]);
    });
};

>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
