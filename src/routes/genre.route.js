const express = require('express');
const router = express.Router();
const genre = require('../controllers/genre.controller');

router.post('/genre', genre.create);
router.get('/genre/:id', genre.getGenre);
router.get('/genre/', genre.getGenres);
router.delete('/delete/:id', genre.remove);


module.exports = router;