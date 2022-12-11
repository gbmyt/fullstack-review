import React from 'react';

const RepoListRow = (props) => (
  <tr>
    <td><a href={props.repo.html_url}>{props.repo.name}</a></td>
    <td>{props.repo.owner.login}</td>
    <td>{props.repo.stargazers_count}</td>
  </tr>
)

export default RepoListRow;