const express = require('express');
const router = express.Router();
const postController = require('./post/postController');
const userController = require('./user/userController');

router.get('/posts/:id', postController.get);
router.get('/posts', postController.getAll);
router.delete('/posts/:id', postController.deleteOne);
router.delete('/posts', postController.deleteAll);
router.post('/posts', postController.add)
router.put('/posts/:id', postController.edit);

router.post('/auth/signup', userController.signup);
router.post('/auth/login', userController.login);
router.post('/auth/logout', userController.logout);

module.exports = router;
