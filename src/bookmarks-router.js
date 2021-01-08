const express = require('express');
const store = require('./store');
const logger = require('./logger');

const bookmarksRouter = express.Router();

bookmarksRouter.route('/bookmarks').get((req, res) => {
  res.json(store.bookmarks);
});

bookmarksRouter.route('/bookmarks/:bookmark_id').get((req, res) => {
  const { bookmark_id } = req.params;

  const bookmark = store.bookmarks.find((c) => c.id == bookmark_id);

  if (!bookmark) {
    logger.error(`Bookmark with id ${bookmark_id} not found.`);
    return res.status(404).send('Bookmark Not Found');
  }

  res.json(bookmark);
});

module.exports = bookmarksRouter;
