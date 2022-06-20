const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// Get all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ]
        });

        // serialize the data
        const posts = postData.map((post) => post.get({ plain: true }));

        // pass serialized data into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'content',
                'title',
                'dateCreated'
            ],
            include: [
                {
                    model: User, 
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'dateCreated', 'comment_text', 'user_id', 'post_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })

        const post = postData.get({ plain: true });

        res.render('singlePost', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Signup route
router.get('/signup', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});


module.exports = router;