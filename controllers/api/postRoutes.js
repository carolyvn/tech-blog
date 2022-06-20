const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new post
router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            ...req.body,
            // title: req.body.title,
            // content: req.body.content,
            user_id: req.session.user_id
        })
        console.log(postData);
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update the post 
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        )
        .then(postData => {
            if(!postData) {
                res.status(404).json({ message: 'No post found with that ID' });
                return;
            }
            res.status(200).json(postData);
        })

        // if (!postData) {
        //     res.status(404).json({ message: 'No post found with that ID' });
        //     return;
        // }
        // res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    };
});

// Delete the post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            }
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with that ID' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;