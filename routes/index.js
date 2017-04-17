'use strict'

const { getAllShows } = require('../controllers/showCtrl')

const { Router } = require('express')
const router = Router()

router.get('/shows', getAllShows)

module.exports = router
