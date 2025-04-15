const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.send('User route is working!');
});

router.post('/register', (req, res) => {
    res.send('User registration route is working!');
});

module.exports = router;