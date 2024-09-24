const express = require('express');
const router = express.Router();
const statusController = require('../controllers/lolStatusController');

//Route to get champ rotations
router.get('/status', statusController.checkLolStatus);

module.exports = router;
