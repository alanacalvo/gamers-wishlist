const mongoose = require('../db/connection');

const GameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        img: String,
        creator: String,
        releasedate: String,
        tags: [String],
        inprogress: Boolean,
        complete: Boolean,
        owned: Boolean,
        notes: String,
    }
)

const Games = mongoose.model('Games', GameSchema);

module.exports = Games;