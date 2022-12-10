const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  let options = {
    url: `https://api.github.com/users`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
  };

  axios.get(options.url + `/${username}/repos`, options)
    .then(response => {
      console.log('got repos by username');
      cb(response.data);
    })
    .catch(err => {
      console.log('helpers/github.js Caught an Error!', err);
    });
}

module.exports.getReposByUsername = getReposByUsername;