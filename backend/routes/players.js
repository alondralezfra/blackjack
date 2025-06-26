const express = require('express');
const router = express.Router();
const Player = require('../models/player');

// Get all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get player by name
router.get('/:name', async (req, res) => {
    try {
        const player = await Player.findOne({ name: req.params.name });
        if (!player) return res.status(404).json({ message: 'Player not found' });
        res.json(player);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create player
router.post('/', async (req, res) => {
    try {
        const player = new Player(req.body);
        const savedPlayer = await player.save();
        res.json(savedPlayer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;