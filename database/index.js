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

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;