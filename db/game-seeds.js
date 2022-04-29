const Games = require('../models/game-schema');
const importApiData = require('./rawg-game-seeds.json');

importApiData.map(item => {
    console.log(item)
    // return {
    //     results: [
    //         {
    //             id: item._id,
    //             name: item.name,
    //             released: item.released,
    //             background_image: item.background_image,
    //             rating: item.rating,
    //             playtime: item.playtime,
    //             parent_platforms: [
    //                 {
    //                     platform: item.name
    //                 }
    //             ],
    //             tags: [
    //                 {
    //                     name: item.tags.name
    //                 }
    //             ],
    //             genres: item.genres,
    //             stores: item.stores,
    //             onwishlist: true,
    //             notstarted: true,
    //             inprogress: false,
    //             complete: false,
    //         }
    //     ]
    // }
});

Games.deleteMany({})
    .then(() => {
        return Games.insertMany(importApiData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    });