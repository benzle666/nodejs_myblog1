const Video = require('../models/Video');
const { multipleMongooseToObject } = require('../../util/mongoose');

class UserController {
    // [GET] /asset/videos
    assetVideos(req, res, next) {
        let videoQuery = Video.find({}).lean();

        Promise.all([
            videoQuery.sortable(req),
            Video.countDocumentsWithDeleted({ deleted: true }),
        ])
            .then(([videos, deletedCount]) =>
                res.render('user/asset/videos', {
                    videos,
                    deletedCount,
                }),
            )
            .catch(next);
    }

    // [GET] /deleted/videos
    deletedVideos(req, res, next) {
        Video.findWithDeleted({ deleted: true })
            .lean()
            .then((videos) =>
                res.render('user/deleted/videos', {
                    videos: videos,
                }),
            )
            .catch(next);
    }
}

module.exports = new UserController();
