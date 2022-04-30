const Games = require('../models/game-schema');
const importApiData = require('./rawg-game-seeds.json');
let newArray = importApiData[0].results.map(item => {
    let platformNames = [];
    item.parent_platforms.forEach(a => {
        platformNames.push(a.platform.name)
    })
    let tagNames = [];
    item.tags.forEach(a => {
        tagNames.push(a.name)
    })
    let genreNames = [];
    item.genres.forEach(a => {
        genreNames.push(a.name)
    })
    let storeInfo = [];
    item.stores.forEach(a => {
        storeInfo.push(a.store.name, a.store.domain)
    })
    return {
        name: item.name,
        released: item.released,
        background_image: item.background_image,
        rating: item.rating,
        playtime: item.playtime,
        parent_platforms: platformNames,
        tags: tagNames,
        genres: genreNames,
        stores: storeInfo,
        onwishlist: true,
        notstarted: true,
        owned: false,
        inprogress: false,
        complete: false,
    }
});
Games.deleteMany({})
    .then(() => {
        return Games.insertMany(newArray)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    });