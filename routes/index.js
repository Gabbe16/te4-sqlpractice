const express = require('express')
const router = express.Router()

// Homepage
router.get('/', function (req, res) {
    res.render('index.njk', { title: 'Welcome' })
})

// Get all cats
router.get('/cats', function (req, res) {
    res.render('', { title: 'All Cats' })
})

// Get a specific cat
router.get('/cats/:id', function (req, res) {
    res.render('', { title: 'Specific cat' })
})

// Get all cat races
router.get('/races', function (req, res) {
    res.render('', { title: 'All Cat Races' })
})

// Get a specific cat race
router.get('/races/:id', function (req, res) {
    res.render('', { title: 'Specific race' })
})

// SELECT * FROM cats JOIN cat_breeds ON cats.breed_id = cat_breeds.id


module.exports = router