const mongoose = require('../db/connection');

const GameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        img: String,
        developer: String,
        releasedate: String,
        tags: [String],
        onwishlist: Boolean,
        owned: Boolean,
        notstarted: Boolean,
        inprogress: Boolean,
        complete: Boolean,
        notes: String,
    }
)

const Games = mongoose.model('Games', GameSchema);

module.exports = Games;