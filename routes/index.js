'use strict'

const { Router } = require('express')
const router = Router()

const { getShows, getShow, getShowFaves, addShow, deleteShow, getShowDirectors, getDirectors, getDirectorShows } = require('../controllers/showCtrl')

router.get('/shows', getShows)
router.post('/shows/new', addShow)
router.delete('/shows/:id', deleteShow)
router.get('/shows/favorites', getShowFaves)
router.get('/shows/directors', getShowDirectors)
router.get('/shows/:id', getShow)

router.get('/directors', getDirectors)
router.get('/directors/shows', getDirectorShows)

module.exports = router
