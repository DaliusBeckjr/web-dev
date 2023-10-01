const express = require('express');

// set up express app
const app = express();

// listen for request
app.listen(3000) // automatically infers localhost:3000

app.get('/', (req, res) => {
    // res.send('this is the home page');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('this is the about page');
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use( (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
});


