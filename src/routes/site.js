var express = require('express');
var router = express.Router();

var siteController = require('../app/controllers/SiteController');

router.get('/:slug', siteController.search);
router.get('/', siteController.index);

module.exports = router;
