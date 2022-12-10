const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  let options = {
    url: `https://api.github.com/users`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url + `/${username}/repos`, options)
    .then(data => {
      console.log('getReposByUsername results retrieved');
      // console.log('getReposByUsername results', data);
      cb(data);
    })
    .catch(err => {
      console.log('Axios Get Call Caught an Error! --> helpers/github.js', err);
    });

}

module.exports.getReposByUsername = getReposByUsername;