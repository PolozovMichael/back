const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
// Setting up view engine
app.set('view engine', 'ejs');
// Static files 
app.use(express.static('public'));
app.use(express.static('public/img'));
app.use(express.static('public/css'));
//problem is solved

app.listen(PORT, () => {
    console.log(`Running on localhost ${PORT}`);
});
