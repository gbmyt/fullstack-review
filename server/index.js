const express = require('express');
var getReposByUsername = require('../helpers/github').getReposByUsername;
let app = express();

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use('/', express.static('client/dist'));

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  console.log('server index.js getRepos', getReposByUsername('gbmyt'));
  // let data = getReposByUsername('hackreactor');
  // res.write(JSON.stringify(data));
  console.log('/repos POST Request Log');
  res.end('200 OK');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

