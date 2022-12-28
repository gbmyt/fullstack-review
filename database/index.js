const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  owner: String,
  url: String,
  description: String,
  stargazers_count: Number,
  created_at: Date,
  updated_at: Date,
});

const Repo = mongoose.model('Repo', repoSchema);

// This should save a repo or repos to the MongoDB
let dbSave = async (repos) => {
  await Repo.syncIndexes();

  repos.map(async repo => {
    repo = new Repo({
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      url: repo.html_url,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
    });
    try {
      await repo.save();
    } catch (err) {
      if (err.code && err.code == 11000) {
        console.log(`Error Saving Duplicate Repo #${repo.id}`);
      } else {
        console.log('Error Saving to DB');
      }
    }
  });
}

// get top 25 repos
let fetchTopRepos = async (cb) => {
  try {
    let topRepos = await Repo.find({}).sort({ stargazers_count: -1 }).limit(25);
    cb(null, topRepos);
  } catch (err) {
    console.log('Error Fetching from DB', err);
    cb(err)
  } finally {
    console.log('Got Top 25 Repos');
  }
};

module.exports.dbSave = dbSave;
module.exports.fetchTopRepos = fetchTopRepos;