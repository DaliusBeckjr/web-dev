const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use( (req, res, next) => {
    console.log('new request made');
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    next();
});


const dbURI = 'mongodb+srv://<username>:<password>@cluster0.i9hpcce.mongodb.net/<database name>';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, // this is not supported
})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// view engine
app.set('view engine', 'ejs')

//routes
app.get('*', checkUser)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/smoothies', requireAuth, (req, res) => {
    res.render('smoothies')
})

app.use(authRoutes);