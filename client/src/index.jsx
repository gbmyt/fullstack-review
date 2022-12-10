import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

var getReposByUsername = require('../../helpers/github').getReposByUsername;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);

    $.ajax({
      url: '/repos',
      method: 'POST',
      data: { username: term },
      // body: term,
      // contentType: "application/json",
      dataType: "json",
      success: function(status) {
        console.log('POST RES', status);
      },
      error: function(err) {
        console.log('Post Error: ', err);
      }
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
