const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost/fetcher');
// }

// Mongoose Repos Schema
let repoSchema = mongoose.Schema({
  _id: { type: Number, unique: true, required: true },
  name: String,
  full_name: String,
  owner: {
    login: String,
    id: Number,
    avatar_url: String,
    gravatar_id: String,
    url: String,
    html_url: String,
    followers_url: String,
    following_url: 	String,
    gists_url: String,
    starred_url: String,
    subscriptions_url: String,
    organizations_url: String,
    repos_url: String,
    events_url: String,
    received_events_url: String,
    type: String,
    site_admin: Boolean
  },
  private: Boolean,
  html_url: String,
  description: String,
  fork: Boolean,
  url: String,
  forks_url: String,
  keys_url: String,
  collaborators_url: String,
  teams_url: String,
  hooks_url: String,
  issue_events_url: String,
  events_url: String,
  assignees_url: String,
  branches_url: String,
  tags_url: String,
  blobs_url: String,
  git_tags_url: String,
  git_refs_url: String,
  trees_url: String,
  statuses_url: String,
  languages_url: String,
  stargazers_url: String,
  contributors_url: String,
  subscribers_url: String,
  subscription_url: String,
  commits_url: String,
  git_commits_url: String,
  comments_url: String,
  issue_comment_url: String,
  contents_url: String,
  compare_url: String,
  merges_url: String,
  archive_url: String,
  downloads_url: String,
  issues_url: String,
  pulls_url: String,
  milestones_url: String,
  notifications_url: String,
  labels_url: String,
  releases_url: String,
  deployments_url: String,
  created_at: String,
  updated_at: String,
  pushed_at: String,
  git_url: String,
  ssh_url: String,
  clone_url: String,
  svn_url: String,
  homepage: String,
  size: Number,
  stargazers_count: Number,
  watchers_count: Number,
  language: String,
  has_issues: Boolean,
  has_downloads: Boolean,
  has_wiki: Boolean,
  has_pages: Boolean,
  forks_count: Number,
  mirror_url: String,
  open_issues_count: Number,
  forks: Number,
  open_issues: Number,
  watchers: Number,
  default_branch: String
});

let Repo = mongoose.model('Repo', repoSchema);

// This function should save a repo or repos to
// the MongoDB

// await Repo.create(/* options */);
// console.log(username + 'repos were saved!');
// ==========================================================
// First pass implementation attempt -> see issue note about saving in client/src/index.jsx before uncommenting

// Commenting out until mongoose.connect() error is resolved
// ==========================================================
let save = (userRepos) => {
  let repos = userRepos.data;
  console.log('inside save function');
  console.log('repos', userRepos.data[0].id);
  // console.log('repos', Object.keys(userRepos));

  repos.forEach(repo => {
    let currentRepo = new Repo(repo);
    // console.log('Current Repo', currentRepo);
    console.log('Current Repo ID #', repo.id);
    currentRepo.save();
  });

  console.log('done saving');
  // console.log('Repos saved!');
}

module.exports.save = save;