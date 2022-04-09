const { Post } = require('../models');

const postData = [
    {
        post_title: 'Test',
        post_content: 'This is a test',
        dateCreated: 1/1/2021,
        user_id: 2,
        
    },
    {
        post_title: 'Test2',
        post_content: 'For testing 2',
        user_id: 1,
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports =  seedPost;