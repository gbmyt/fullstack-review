import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const axios = require('axios');

var getReposByUsername = require('../../helpers/github').getReposByUsername;
// var save = require('../../database/index').save;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    axios.post('/repos', { data: getReposByUsername(term) })
      .then(result => {
        // ==========================================================
        // Issues trying to save fetched repos to database using 'database/index.js' save() here
        // mongoose.connect is being imported w the function but cant be used in browser. See here: https://mongoosejs.com/docs/browser.html
        // ==========================================================

        // save(result.data);
        console.log('Search POST Result', result.data);
      });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));