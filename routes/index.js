<<<<<<< HEAD
'use strict'

const { getAllShows } = require('../controllers/showCtrl')

const { Router } = require('express')
const router = Router()

router.get('/shows', getAllShows)

module.exports = router
=======
'use strict';

const { Router } = require('express');
const router = Router();

const { getShows, getShow, getShowFaves } = require('../controllers/showCtrl');

router.get('/shows', getShows);
router.get('/shows/favorites', getShowFaves);
router.get('/shows/:id', getShow);

module.exports = router;
>>>>>>> f617d1d66f5778f98b2686d4787192da376bc658
