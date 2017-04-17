'use strict'

const { bookshelf } = require('../db/database')
require('./favorite')

const Show = bookshelf.Model.extend({
  tableName: 'shows',
  upvotes: function() { return this.hasMany('Favorite')}
}, {
  getAll: function () {
    console.log(`Get all Called from show model`)
    return this.forge()
      .fetchAll()
      .then(shows => shows)
      .catch(error => error)
  }
})


module.exports = bookshelf.Model('Show', Show)

