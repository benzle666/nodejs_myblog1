// Hỗ trợ handlebars do security nên phải đổi sang literal obj
module.exports = {
    multipleMongooseToObject: function (objs) {
        return objs.map((obj) => obj.toObject());
    },
    mongooseToObject: function (obj) {
        return obj.toObject();
    },
};
