const express = require('express');
const app = express();
// const axios = require('axios');
const Games = require('./controllers/gamerlist-controller');
const methodOverride = require('method-override');
const ejsLayouts = require('express-ejs-layouts');
require('dotenv').config();
// const bodyParser = require('body-parser');
// require('ejs');
// const ejsLint = require('ejs-lint');
// app.use('ejs-lint')
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(ejsLayouts);
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/games', Games);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express running on localhost:${port}`)
});