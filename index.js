const express = require('express');
const app = express();
const Games = require('./controllers/gamerlist-controller');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
// require('ejs');
// const ejsLint = require('ejs-lint');
// app.use('ejs-lint')
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/games', Games);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express running on localhost:${port}`)
});