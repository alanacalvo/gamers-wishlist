const mongoose = require('../db/connection');

const GameSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        released: String,
        background_image: String,
        rating: String,
        playtime: String,
        parent_platforms: String,
        tags: [
            {
                name: String
            }
        ],
        genres: [
            {
                name: String
            }
        ],
        stores: [
            {
                store: {
                    name: String,
                    domain: String
                }
            }
        ],
        onwishlist: Boolean,
        owned: Boolean,
        notstarted: Boolean,
        inprogress: Boolean,
        complete: Boolean,
        notes: String
    }
)

const Games = mongoose.model('Games', GameSchema);

module.exports = Games;