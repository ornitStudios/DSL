// importing express
const express = require('express');

// create a web application as an instance of express()
const app = express();

// listen! the listen() function takes two arguments
// 1. a port on which to listen
// 2. a callback function i.e. what to do when a request arrives through this port
app.listen(3000, () => console.log('listening on 3000'));

// use the static function of the express library.
// the function takes a file or a directory as a parameter
app.use(express.static('public'));