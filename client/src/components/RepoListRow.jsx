import React from 'react';

const RepoListRow = (props) => (
  <tr>
    <td>{props.repo.id}</td>
    <td>{props.repo.owner.login}</td>
    <td>{props.repo.stargazers_count}</td>
  </tr>
)

export default RepoListRow;