const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'this is a comment',
        user_id: 2,
        post_id: 1,
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;