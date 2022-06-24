const {loadUser} = require('./user_model');
const express = require('express');
const app = express();

const port = 8080;
app.listen(port, () => console.log(`server running...`))

app.get('/', (req,res) => res.send('Welcome'))

app.get('/users', (req,res) => {
    res.send(loadUser());
});

