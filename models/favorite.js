<<<<<<< HEAD
'use strict'

const { bookshelf } = require('../db/database')
require('./show')

const Favorite = bookshelf.Model.extend({
  tableName: 'favorites',
  show: function() { return this.belongsTo(Show)}
=======
'use strict';

const { bookshelf } = require('../db/database');
require('./show');

const Favorite = bookshelf.Model.extend({
  tableName: 'favorites',
  show: function() { return this.belongsTo(Show) }
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
<<<<<<< HEAD
    .then(rows => rows)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('Favorite', Favorite)
=======
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  }
});

module.exports = bookshelf.model('Favorite', Favorite);
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
