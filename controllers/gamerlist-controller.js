const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Games = require('../models/game-schema');

// Find all 
router.get('/', (req, res) => {
    Games.find({})
        .then(games => res.render('allgames', { games: games }))
        .catch(console.error);
});
// Sort by alphabetical order -- not working
router.get('/:a-z', (req, res) => {
    Games.aggregate([{ $sort: { name: -1}}])
    // .then(games => console.log(games))
        .then(games => res.render('allgames', games))
});
// Find by ID (VIEW GAME INFO)
router.get('/:id/view', (req, res) => {
    Games.findById(req.params.id)
        .then(games => res.render('view', games))
        .catch(console.error)
});
// Find all games on wishlist
router.get('/wishlist', (req,res) => {
    Games.find({onwishlist: true})
        .then(games => res.render('wishlist', {games: games}))
        .catch(console.error)
});
// Find all games that I own
router.get('/mygames', (req,res) => {
    Games.find({owned: true})
        .then(games => res.render('mygames', {games: games}))
        .catch(console.error)
});
// Find by ID (EDIT GAME INFO)
router.get('/:id/edit', (req, res) => {
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
    Games.findOneAndDelete({ _id: req.params.id }, { new: true })
        .then(() => res.redirect('/games'))
        .catch(console.error)
});
// Add New Game page
router.get('/add', (req, res) => {
    res.render('add')
});
// Add game to db
router.post('/', (req, res) => {
    Games.create(req.body)
        .then(() => res.redirect('/games'))
        .catch(console.error)
});
module.exports = router;