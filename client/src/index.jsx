import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = (props) => {
  const [repos, setRepos] = useState([]);

  const search = (term) => {
    console.log(`${term} was searched`);
    // TODO
  };

  return (<div>
    <h1>Github Fetcher</h1>
    <RepoList repos={repos}/>
    <Search onSearch={search}/>
  </div>)
}

ReactDOM.render(<App />, document.getElementById('app'));