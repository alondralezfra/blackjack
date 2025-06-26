const express = require('express');
const router = express.Router();
const Game = require('../models/game');

// Generate random hand
const generateHand = () => {
    return [Math.ceil(Math.random() * 11), Math.ceil(Math.random() * 11)];
};

// Get all games
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new game
router.post('/', async (req, res) => {
    try {
        const hand = generateHand();
        const total = hand[0] + hand[1];
        let status = 'in-progress';

        if (total === 21) status = 'won';
        else if (total > 21) status = 'lost';
        console.log('Hand:', hand, 'Total:', total); // Debugging line to check hand and total

        const game = new Game({ player: req.body.player, status });
        const savedGame = await game.save();

        res.json({ 
            _id: savedGame._id, 
            player: savedGame.player, 
            status: savedGame.status, 
            createdAt: savedGame.createdAt, 
            hand //adding the hand to display in frontend
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete game
router.delete('/:id', async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.json({ message: 'Game deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
