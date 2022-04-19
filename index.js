const express = require('express');
const app = express();
const Games = require('./controllers/wishlist-controller');
// const path = require('path');
// require('ejs');
app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/' + 'public'));
// app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/games', Games);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express running on localhost:${port}`)
});