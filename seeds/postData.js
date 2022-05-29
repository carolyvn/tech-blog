const { Post } = require('../models');

const postData = [
    {
        title: 'Test',
        content: 'This is a test',
        dateCreated: 1/1/2021,
        user_id: 2,
        
    },
    {
        title: 'Test2',
        content: 'For testing 2',
        user_id: 1,
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports =  seedPost;