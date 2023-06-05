const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/postController');

postRouter.get('/', postController.getAll);
postRouter.get('/create', postController.getCreatePage);
postRouter.post('/create', postController.createPost);

module.exports = postRouter;