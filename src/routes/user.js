var express = require('express');
var router = express.Router();

var userController = require('../app/controllers/UserController');

router.get('/storage/videos', userController.assetVideos);
router.get('/deleted/videos', userController.deletedVideos);

module.exports = router;
