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

  componentDidMount() {
    $.ajax({
      url: '/repos',
      method: "GET",
      success: function(repos) {

        if (repos.data.length > 0) {
          this.setState({ repos: repos.data });
          console.log('Updated Repos', this.state.repos.length);
        }
      }.bind(this),
      error: function(err) {
        console.log('Err?', err);
      }.bind(this)
    });

  }

  search (term) {
    console.log(`${term} was searched`);

    // send username along with /repos post request
    $.ajax({
      url: '/repos',
      method: 'POST',
      data: { username: term },
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
