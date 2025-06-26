const express = require('express');
const mongoose = require('mongoose'); // library to connect to local MongoDB
const cors = require('cors');

// Import routes
const gamesRoutes = require('./routes/games');
const playersRoutes = require('./routes/players');

const app = express(); // app is the express server instance
app.use(cors()); // allow React to make API calls to express server
app.use(express.json()); // allow express to parse JSON data from requests

const PORT = 5000;

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/blackjack', { // with this, all models created will associate with this blackjack database
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected')) // wait for connection (connect returns a promise)
.catch(err => console.error(err));

// Define Routes
app.use('/api/games', gamesRoutes);
app.use('/api/players', playersRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
