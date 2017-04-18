'use strict'

<<<<<<< HEAD
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

=======
const { bookshelf } = require('../db/database');
require('./favorite');

const Show = bookshelf.Model.extend({ 
  tableName: 'shows',
  upvotes: function(){ return this.hasMany('Favorite')}
}, {
  getAll: function() {
    console.log("Get all called from Show Model");
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  },
  getSingleShow: function(id) {
    // console.log("show id", id);
    return this.forge({id})
    .fetch()
    .then( (show) => {
      return show;
    })
    .catch( (error) => {
      // console.log("error??", error);
      return error;
    });
  }
});

module.exports = bookshelf.model('Show', Show);
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
