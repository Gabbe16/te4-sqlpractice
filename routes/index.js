const express = require('express')
const router = express.Router()

const pool = require('../db')

// db test route to get all cats
router.get('/dbtest', async function (req, res) {
    try {
        const [catsWithBreed] = await pool.promise().query(
            `SELECT cats.*, cat_breeds.name AS breed 
             FROM cats 
             JOIN cat_breeds 
             ON cats.breed_id = cat_breeds.id;`
        );
        console.log(catsWithBreed)
        return res.render('cats.njk', {
            title: 'All Cats',
            cats: catsWithBreed
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// db test route to get specific cat
router.get('/dbtest/:id', async function (req, res) {
    try {
        const [catsWithBreed] = await pool.promise().query(
            `SELECT cats.*, cat_breeds.name AS breed, cat_breeds.description
             FROM cats 
             JOIN cat_breeds 
             ON cats.breed_id = cat_breeds.id WHERE cat_breeds.id = ?`, [req.params.id]
        );
        return res.render('cat.njk', {
            title: 'Specific Cat',
            cat: catsWithBreed[0]
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

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

module.exports = router