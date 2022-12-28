const express = require('express');
let app = express();
const path = require('path');

const getReposByUsername = require('../helpers/github').getReposByUsername;
const dbSave = require('../database/index').dbSave;
const fetchTopRepos = require('../database/index').fetchTopRepos;

app.use(express.urlencoded({ extended: true }));

// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static(path.join(__dirname, '../client/dist')));

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  getReposByUsername(req.body.username, async (err, repos) => {
    if (err) {
      console.log('Error Getting Repos', err);
      res.status(res.statusCode).send(err);
    } else {
      await dbSave(repos.data);
      console.log('Saved repos');
      res.sendStatus(res.statusCode);
    }
  });
});

// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
  fetchTopRepos((err, repos) => {
    if (err) {
      console.log(err);
      res.status(res.statusCode).send(err);
    } else {
      res.status(res.statusCode).send(repos);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

