const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('public/img'));
app.use(express.static('public/css'));

app.use('/', require('./routes/root.js'));
app.use('/login', require('./routes/login.js'));
app.use('/register', require('./routes/register.js'));


mongoose.connect('mongodb://localhost/user_db')
    .then(() => console.log('Connected to a MongoDB...'))
    .catch(err => console.error('Failed to connect to a MongoDB', err));

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

const User = mongoose.model('User', userSchema);

async function createUser() {
    const user = new User({
        name : 'Michael',
        password : '123456'
    });

    const rslt = await user.save();
    console.log(rslt);
}

async function getUser() {
    const rslt = await User
        .find({name : 'Michael'})
        .limit(20)
        .sort({name : '1'})
        .select({name : '1'})
    console.log(rslt);
}

createUser();
getUser();

app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}`);
});
