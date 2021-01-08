const express = require('express');
const store = require('./store');

const bookmarksRouter = express.Router();

bookmarksRouter.route('/bookmarks').get((req, res) => {
  res.json(store.bookmarks);
});

module.exports = bookmarksRouter