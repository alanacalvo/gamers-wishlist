const express = require('express');
const app = express();
const Games = require('./controllers/wishlist-controller');

app.use(express.json());
app.use(Games);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express running on localhost:${port}`)
});