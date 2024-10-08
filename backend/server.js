//Importing the required modules
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const accountRoutes = require('./routes/accountRoutes');
const summonerRoutes = require('./routes/summonerRoutes');
const spectatorRoutes = require('./routes/spectatorRoutes');
const championRoutes = require('./routes/championRoutes');
const statusRoutes = require('./routes/statusRoutes');
const leagueRoutes = require('./routes/leagueRoutes');


dotenv.config({ path: '../.env' });

// Middleware
app.use(express.json());
app.use(cors());



// Routes
app.use('/api/accounts', accountRoutes);
app.use('/api/summoners', summonerRoutes);
app.use('/api/spectator', spectatorRoutes);
app.use('/api/platform', championRoutes);
app.use('/api/lol-status', statusRoutes);
app.use('/api/league', leagueRoutes);


//test
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});
app.get('/api/accounts', (req, res) => {
    res.json({ message: 'Welcome to the Accounts API' });
});
app.get('/api/summoners', (req, res) => {
    res.json({ message: 'Welcome to the summoners API' });
});
app.get('/api/spectator', (req, res) => {
    res.json({ message: 'Welcome to the spectator API' });
});
app.get('/api/platform', (req, res) => {
    res.json({ message: 'Welcome to the champion/platform API' });
});
app.get('/api/lol-status', (req, res) => {
    res.json({ message: 'Welcome to the lol status API' });
});
app.get('/api/league', (req, res) => {
    res.json({ message: 'Welcome to the league API' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
