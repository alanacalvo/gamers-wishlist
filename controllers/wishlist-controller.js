const express = require('express');
const router = express.Router();

const Games = require('../models/game-schema');

// Find All
router.get('/', (req,res) => {
    Games.find({})
        .then(games => res.send(games))
        .catch(console.error)
});

// Find by ID
router.get('/:id', (req,res) => {
    Games.findById(req.params.id)
        .then(games => res.send(games))
        .catch(console.error)
});

// Find one and update
router.put('/games/:id', (req,res) => {
    console.log('hello')
    console.log(req.body)
    Games.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(games => res.send(games))
        .catch(console.error)
});

module.exports = router;

// {
//     title: req.body.title,
//     creator: req.body.creator,
//     releasedate: req.body.releasedate,
//     tags: [req.body.tags],
//     status: req.body.status,
//     owned: req.body.true,
//     notes: req.body.notes
// }