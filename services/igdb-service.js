// require('dotenv').config();
// const axios = require('axios');
// const { timeout } = require('nodemon/lib/config');
// let accessToken;

// const authenticate = async () => {
//     const res = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENTID}&client_secret=${process.env.IGDB_CLIENTSECRET}&grant_type=client_credentials`)
//     accessToken = res.data.access_token
// }

// const getGames = async () => {
//     const res = await axios.post(`https://api.igdb.com/v4/games`, 'fields id, name, platforms, genres, cover, summary, first_release_date; limit 5;',
//     { headers: { 'Accept': 'application/json', 'Client-ID': process.env.IGDB_CLIENTID, 'Authorization': 'Bearer ' + accessToken } })
//     let temp = [];
//         for (let i = 0; i < res.data.length; i++) {
//         const cover = await axios.post(`https://api.igdb.com/v4/covers`, `fields url; where game = ${res.data[i].id};`,
//         { headers: { 'Accept': 'application/json', 'Client-ID': process.env.IGDB_CLIENTID, 'Authorization': 'Bearer ' + accessToken } })
//             // console.log('lets try', cover.data)
//         if (cover.data[0]) {
//             let currentData = res.data[i];
//             currentData.cover = `https:${cover.data[0].url}`;
//             temp.push(currentData)
//         }
//     }
//     return temp;
// }


// module.exports = {authenticate,getGames} 