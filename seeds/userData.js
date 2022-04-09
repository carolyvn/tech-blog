const { User } = require('../models');

const userData = [
    {
        username: 'test',
        password: 'test123',
    },
    {
        username: 'john',
        password: 'johndoe',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;