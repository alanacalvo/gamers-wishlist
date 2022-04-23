const express = require('express');
const router = express.Router();

const Games = require('../models/game-schema');

// Find All
router.get('/', (req, res) => {
    Games.find({})
        .then(games => res.render('games', {games: games}))
        .catch(console.error)
});

// Find by ID (VIEW GAME INFO)
router.get('/:id/view', (req, res) => {
    Games.findById(req.params.id)
        .then(games => res.render('view', games))
        .catch(console.error)
});
// Find by ID (EDIT GAME INFO)
router.get('/:id/edit', (req,res) => {
    Games.findById(req.params.id)
        .then(games => res.render('edit', games))
        .catch(console.error)
});
// Find one and update
router.put('/:id/edit', (req, res) => {
    req.body.owned = req.body.owned ? true : false
    req.body.inprogress = req.body.inprogress ? true : false
    req.body.complete = req.body.complete ? true : false
    Games.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(games => res.render('view', games))
        .catch(console.error)
});
// Find one and delete
router.delete('/:id', (req, res) => {
    Games.findOneAndDelete({ _id: req.params.id }, {new: true})
        .then(() => res.redirect('/games'))
        .catch(console.error)
});
// Add New Game page
router.get('/add', (req,res) => {
    res.render('add')
});
// Add game to db
router.post('/', (req, res) => {
    Games.create(req.body)
        .then(() => res.redirect('/games'))
        .catch(console.error)
});

module.exports = router;