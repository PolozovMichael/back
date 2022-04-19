const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('public/img'));
app.use(express.static('public/css'));

app.use('/', require('./routes/root.js'));
app.use('/login', require('./routes/login.js'));
app.use('/register', require('./routes/register.js'));

app.listen(PORT, () => {
    console.log(`Running on localhost ${PORT}`);
});
