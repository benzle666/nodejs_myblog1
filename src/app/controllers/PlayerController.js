const Video = require('../models/Video');
const { mongooseToObject } = require('../../util/mongoose');

class PlayerController {
    // [GET] /videos/:slug
    show(req, res, next) {
        Video.findOne({ slug: req.params.slug })
            .then((video) => {
                res.render('player/show', {
                    video: mongooseToObject(video),
                });
            })
            .catch(next);
    }

    // [GET] /videos/create
    create(req, res, next) {
        res.render('player/create');
    }

    // [GET] /videos/:id/edit
    edit(req, res, next) {
        Video.findById(req.params.id)
            .then((video) =>
                res.render('player/edit', {
                    video: mongooseToObject(video),
                }),
            )
            .catch(next);
    }

    // [PUT] /videos/:id
    update(req, res, next) {
        Video.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/user/storage/videos'))
            .catch(next);
    }

    // [DELETE] /videos/:id
    destroy(req, res, next) {
        Video.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /videos/:id/force
    forceDestroy(req, res, next) {
        Video.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /videos/store
    store(req, res, next) {
        const video = new Video(req.body);
        video
            .save()
            .then(() => res.render('home'))
            .catch(next);
    }

    // [PATCH] /videos/:id/restore
    restore(req, res, next) {
        Video.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /videos/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Video.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.send('Action invalid');
        }
    }
}

module.exports = new PlayerController();
