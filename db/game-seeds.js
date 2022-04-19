const Games = require('../models/game-schema')
const seedData = require('./game-seeds.json')

console.log(seedData)

Games.deleteMany({})
    .then(() => {
        return Games.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })