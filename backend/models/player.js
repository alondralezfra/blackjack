const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: String,
    bankroll: Number,
    wins: { type: Number, default: 0 }, // Number of games won
    losses: { type: Number, default: 0 }, // Number of games lost
});

module.exports = mongoose.model('Player', PlayerSchema);