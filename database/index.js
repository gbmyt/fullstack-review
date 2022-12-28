const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  url: String,
  description: String,
  stargazers_count: Number,
  created_at: Date,
  updated_at: Date,
});

const Repo = mongoose.model('Repo', repoSchema);

// This should save a repo or repos to the MongoDB
let dbSave = async (repos) => {
  repos.map(async repo => {
    repo = new Repo({
      id: repo.id,
      name: repo.name,
      url: repo.url,
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

module.exports.dbSave = dbSave;