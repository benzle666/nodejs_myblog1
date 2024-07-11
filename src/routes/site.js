var express = require('express');
var router = express.Router();

var siteController = require('../app/controllers/SiteController');

router.use('/:slug', siteController.search);
router.use('/', siteController.index);

module.exports = router;
