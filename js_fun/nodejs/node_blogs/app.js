const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

// set up express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://<userName>:<password>@cluster0.i9hpcce.mongodb.net/<database>?retryWrites=true&w=majority';
//                      (( use this in case of deprication  )) 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
// if you want to create a second views folder called something else then..
// app.set('views', 'myViews');



// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.use( (req, res, next) => {
    console.log('new request made');
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    next();
});

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);


// 404 page
app.use( (req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: '404' });
});


