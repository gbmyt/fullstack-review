const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = async (username, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  try {
    const repos = await axios.get(options.url + `/${username}/repos`, options);
    cb(null, repos);
  } catch (err) {
    cb(err);
  }
}

module.exports.getReposByUsername = getReposByUsername;