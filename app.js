const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const voters = []

app.get('/', function (req, res) {
    res.render('intro');
});

app.post('/', function (req, res) {
    console.log('posted');
});

// app.post('')

// app.get('/?proceed=', function (req, res) {
//     res.render('form');
// })

app.get('/form', function (req, res) {
    res.render('form');
});

app.get('/about', function (req, res) {
    res.render('about');
})

app.listen(3000, function () {
    console.log('Server listening on port 3000');
});