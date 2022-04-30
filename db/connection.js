const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = 
process.env.NODE_ENV === 'production'
&& process.env.DB_URL

mongoose.connect(mongoURI)
    .then(instance => console.log(`connected to: ${instance.connections[0].name}`))
    .catch(error => console.log(`failed connection:`, error))

module.exports = mongoose; 