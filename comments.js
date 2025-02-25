// Create web server
const express = require('express');
const router = express.Router();

const comments = [
    { message: 'Comment 1' },
    { message: 'Comment 2' },
    { message: 'Comment 3' },
    { message: 'Comment 4' },
];

router.get('/', (req, res) => {
    res.json(comments);
});

router.post('/', (req, res) => {
    const { message } = req.body;
    comments.push({ message });
    res.json({ message });
});

module.exports = router;