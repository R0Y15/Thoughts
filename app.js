const express = require('express');

//setup of express app
const app = express();
//listen for request
app.listen(3000);

//setup for the view engine
app.set('view engine', 'ejs');


rootname = __dirname;
app.get('/', (req, res) => {
    res.render('index', {title : 'HOME'});

});

app.get('/add', (req, res) => {
    res.render('add', {title : 'ADD'});

});

//404-error
// app.use((req, res) => {
//     res.status(404).render(404);
// })