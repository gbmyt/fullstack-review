const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  let options = {
    url: `https://api.github.com/users`,
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
      console.log('Axios Get Call Caught an Error! --> helpers/github.js');
      throw err;
    });
}

module.exports.getReposByUsername = getReposByUsername;