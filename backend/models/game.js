const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    player: String,
    status: String, // e.g., 'in-progress', 'won', 'lost'
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', GameSchema);