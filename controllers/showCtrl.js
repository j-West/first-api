<<<<<<< HEAD
'use strict'

const { bookshelf } = require('../db/database')
const Show = require('../models/show')

module.exports.getAllShows = (req, res, next) => {
  Show.getAll()
  .then(shows => {
    res.status(200).json(shows)
  })
  .catch(error => {
    next(error)
  })
}


=======
'use strict';

const { bookshelf } = require('../db/database');
const Show = require('../models/show');

module.exports.getShows = (req, res, next) => {
  Show.getAll()
  .then( (shows) => {
    res.status(200).json(shows);
  })
  .catch( (error) => {
    next(error);
  });
};

module.exports.getShow = ({params: {id}}, res, next) => {
  Show.getSingleShow(id)
  .then( (show) => {
    res.status(200).json(show)
  })
  .catch( (error) => {
    next(error);
  });
};

module.exports.getShowFaves = ({query: {showId}}, res, next) => {
  console.log("The query string", showId);
  Show.forge({id: showId})
  .fetch({withRelated: ['upvotes'], require: true})
  .then( (faves) => {
    res.status(200).json(faves)
  })
  .catch( (err) => {
    next(err);
  });
};
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
