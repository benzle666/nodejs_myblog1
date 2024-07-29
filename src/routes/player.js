var express = require('express');
var router = express.Router();

var playerController = require('../app/controllers/PlayerController');

router.get('/create', playerController.create);
router.post('/store', playerController.store);
router.post('/handle-form-actions', playerController.handleFormActions);
router.get('/:id/edit', playerController.edit);
router.put('/:id', playerController.update);
router.patch('/:id/restore', playerController.restore);
router.delete('/:id', playerController.destroy);
router.delete('/:id/force', playerController.forceDestroy);
router.get('/:slug', playerController.show);

module.exports = router;
