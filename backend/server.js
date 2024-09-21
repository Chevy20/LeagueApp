//Importing the required modules
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const accountRoutes = require('./routes/accountRoutes');
const summonerRoutes = require('./routes/summonerRoutes');


dotenv.config({ path: '../.env' });

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/accounts', accountRoutes);
app.use('/api/summoners', summonerRoutes)



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
