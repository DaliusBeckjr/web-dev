const express = require('express');
const morgan = require('morgan');

// set up express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// if you want to create a second views folder called something else then..
// app.set('views', 'myViews');


// listen for request
app.listen(3000) // automatically infers localhost:3000

// middleware and static files
app.use(express.static('public'));

// third-party middleware
app.use(morgan('dev'));


app.use( (req, res, next) => {
    console.log('new request made');
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    next();
});

app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname }); // replaceing with render method
    const blogs = [
        {title: 'yoshi finds eggs', snippet: 'lorem ipsum dolor de connector'},
        {title: 'mario finds stars', snippet: 'lorem ipsum dolor de connector'},
        {title: 'luigi finds ghosts', snippet: 'lorem ipsum dolor de connector'},
    ]
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create new blog' });
});

// 404 page
app.use( (req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: '404' });
});


