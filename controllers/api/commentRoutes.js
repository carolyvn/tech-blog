const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments for the post
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({ include: [User] });

        // serialize the data
        const comments = commentData.map((comment) => comment.get({ plain: true }));

        res.status(200).json(comments);
        // res.render('singlePost', {
        //     comments,
        //     logged_in: req.session.logged_in
        // });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new comment
router.post('/', async (req, res) => {
    if (req.session) {
        try {
            const newComment = await Comment.create({
                ...req.body,
                // comment_text: req.body.comment_text,
                // post_id: req.body.post_id,
                // user_id: req.session.user_id,
            });
            res.status(200).json(newComment);
        } catch (err) {
            res.status(500).json(err);
        }
    };
});

module.exports = router;