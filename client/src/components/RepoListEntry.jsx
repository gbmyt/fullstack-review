import React from 'react';

const RepoListEntry = ({ repo }) => (
  <tr>
    <td>
      <a href={repo.url}>{repo.name}</a>
    </td>
    <td>
      <p>{repo.owner}</p>
    </td>
    <td>
      <p>{repo.stargazers_count}</p>
    </td>
  </tr>
);

export default RepoListEntry;