import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = (props) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    const repos = await $.get('/repos');
    setRepos(repos);
  };

  const search = async (term) => {
    console.log(`${term} was searched`);
    await $.post('/repos', { username: term });
    getRepos();
  };

  return (
    <>
      <h1>Github Fetcher</h1>
      <h2> Repo List </h2>
      There are {repos.length} repos.
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));