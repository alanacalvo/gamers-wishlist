const express = require('express');
const router = express.Router();

const Games = require('../models/game-schema');

// Find All
// router.get('/', (req, res) => {
//     Games.find({})
//         .then(games => res.render('games', {games: games}))
//         .catch(console.error)
// });
router.get('/', async (req, res, next) => {
    try {
        const games = await Games.find({});
        console.log(games);
        const context = { games }
        return res.render('games.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// Find by ID
router.get('/:id', (req, res) => {
    Games.findById(req.params.id)
        .then(games => res.send(games))
        .catch(console.error)
});

// Find one and update
router.put('/games/:id', (req, res) => {
    console.log('hello')
    console.log(req.body)
    Games.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(games => res.send(games))
        .catch(console.error)
});

// Find one and delete
router.delete('/:id', (req, res) => {
    Games.findOneAndRemove({ _id: req.params.id })
        .then(() => {
            res.redirect('/')
        })
        .catch(console.error)
});

// Add new game
router.post('/add', (req, res) => {
    Games.create(req.body)
        .then(() => res.redirect('/'));
});

module.exports = router;