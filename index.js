const express = require('express');
const app = express();
const path = require('path');
const Games = require('./controllers/gamerlist-controller');
const methodOverride = require('method-override');
const ejsLayouts = require('express-ejs-layouts');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(ejsLayouts);
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.get('/favicon.ico', (req, res) => res.send("dummy"))
app.get('/', (req, res) => res.redirect('/games'))
app.use('/games', Games);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express running on localhost:${port}`)
});