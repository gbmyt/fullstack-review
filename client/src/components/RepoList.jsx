import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({ repos }) => {
  if (!repos) {
    return (<h3>Nothing to see here.</h3>)
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Repo Name</th>
            <th>Github User</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {repos.map(repo => <RepoListEntry repo={repo} key={repo._id} />)}
        </tbody>
      </table>
    )
  }
}

export default RepoList;