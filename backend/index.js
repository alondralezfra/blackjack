const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/blackjack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware to parse JSON
app.use(express.json());

// Simple Routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the Blackjack backend!' });
});

app.post('/api/echo', (req, res) => {
    res.json({ received: req.body });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const Game = require('./models/game');

// Create a new game
app.post('/api/games', async (req, res) => {
    try {
        const game = new Game(req.body);
        const savedGame = await game.save();
        res.json(savedGame);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all games
app.get('/api/games', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a game by ID
app.delete('/api/games/:id', async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.json({ message: 'Game deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const generateHand = () => {
    // Generate 2 random numbers between 1 and 11 to simulate cards
    return [Math.ceil(Math.random() * 11), Math.ceil(Math.random() * 11)];
};

app.post('/api/games', async (req, res) => {
    try {
        const hand = generateHand();
        const total = hand[0] + hand[1];
        let status = 'in-progress';

        if (total === 21) {
            status = 'won';
        } else if (total > 21) {
            status = 'lost';
        }

        const game = new Game({
            player: req.body.player,
            status
        });

        const savedGame = await game.save();
        res.json(savedGame);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
