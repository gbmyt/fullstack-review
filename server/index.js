const express = require('express');
var getReposByUsername = require('../helpers/github').getReposByUsername;
var save = require('../database/index').save;
let app = express();

// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use('/', express.static('client/dist'));

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', async function (req, res) {
  // console.log('Repos POST Req', req);
  // console.log('Repos POST Res', res);

  // var results = await getReposByUsername('hackreactor');
  // console.log(results);
  // save(results);

  getReposByUsername('hackreactor', (data) => {
    console.log("Retrieved data");
    save(data);
  });
  res.end('201 OK');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('/repos GET Request Log', req);
  res.end('200 OK');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

