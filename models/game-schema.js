const mongoose = require('../db/connection');

const GameSchema = new mongoose.Schema(
    {
        name: String,
        released: String,
        background_image: String,
        rating: String,
        playtime: String,
        parent_platforms:[String],
        tags: [String],
        genres: [String],
        stores: [String],
        onwishlist: Boolean,
        owned: Boolean,
        notstarted: Boolean,
        inprogress: Boolean,
        complete: Boolean,
        notes: String
    }
)

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;