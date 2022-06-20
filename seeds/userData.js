const { User } = require('../models');

const userData = [
    {
        username: 'lee',
        password: 'password',
    },
    {
        username: 'john',
        password: 'password',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;