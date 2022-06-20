const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all the post for the dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
        });
        
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard-admin', {
            layout: 'dashboard',
            posts,
            logged_in: true,
        });
    
    } catch (err) {
        res.status(500).json(err);
        res.redirect('login');
    }
});

// Get to new-post page
router.get('/new', withAuth, async (req, res) => {
    res.render('newPost', {
        layout: 'dashboard'
    });
});

// Get one post by id
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'dateCreated', 'user_id', 'post_id'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    }
                },
                {
                    model: User,
                    attributes: ['username'],
                }
            ]
        });

        const post = postData.get({ plain: true });
        res.render('editPost', {
            layout: 'dashboard',
            post,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;