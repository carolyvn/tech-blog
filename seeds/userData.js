const { User } = require('../models');

const userData = [
    {
        username: 'lee',
        password: 'lee123',
    },
    {
        username: 'john',
        password: 'johndoe',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;