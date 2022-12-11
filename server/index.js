const express = require('express');
let app = express();

var getReposByUsername = require('../helpers/github').getReposByUsername;
var save = require('../database/index').save;
var getTopRepos = require('../database/index').getTopRepos;

// app.use(express.json()); // used more frequently, research this
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  getTopRepos((repos) => {
    console.log('Fetching Top Repos');
  });
  next();
});

// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use('/', express.static('client/dist'));

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function(req, res) {
  getReposByUsername(req.body.username, data => {
    console.log('saving repos');
    save(data);
  })
});

// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
  getTopRepos((repos) => {
    res.send({data: repos});
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

