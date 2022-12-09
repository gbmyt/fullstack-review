const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users`, // how to get root path?
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url + `/${username}/repos`, options) // ?
    .then(data => {
      console.log('axios.get results', data);
    })
    .catch(err => {
      // console.log('Caught: ', err);
      throw err;
    });
  // console.log('getRepos URL', options.url);
}

module.exports.getReposByUsername = getReposByUsername;