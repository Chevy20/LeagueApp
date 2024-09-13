const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World from backend service!');
});

module.exports = router;