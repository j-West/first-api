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


