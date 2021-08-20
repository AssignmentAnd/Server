const express = require('express');
const mongoose = require('mongoose'); //third party
const bodyParser = require('body-parser') //core module

// const db = require('./database/db')
// const register_route = require('./routes/register_route');
// const PostChallenge = require('./routes/Post_challenge');
// const challenge_route = require('./routes/challenge_route');
const app = express();

// app.use(express.json());
// app.use('/pictures', express.static(__dirname + "/pictures/"))
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(register_route);
// app.use(PostChallenge);
// app.use(challenge_route);

app.listen(95);
console.log("APP is running")