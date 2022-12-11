import React from 'react';
import RepoListRow from './RepoListRow.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <hr/>

    <table>
      <tbody>
        <tr>
          <th>Repo</th>
          <th>User</th>
          <th>Stargazers</th>
        </tr>

        { props.repos ? props.repos.map(repo =>
          <RepoListRow key={repo.id} repo={repo}/>
        ) : null }

      </tbody>
    </table>
  </div>
)

export default RepoList;