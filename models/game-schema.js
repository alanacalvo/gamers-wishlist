const mongoose = require('../db/connection');

const GameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        creator: String,
        releasedate: Date, // how does date get added into schema?
        tags: [String],
        status: String, //complete & in progress status
        owned: Boolean,
        notes: String,
    }
)

const Games = mongoose.model('Games', GameSchema);

module.exports = Games;