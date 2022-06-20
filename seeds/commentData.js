const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet1',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet2',
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet3',
        user_id: 2,
        post_id: 2,
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;