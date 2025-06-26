import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [games, setGames] = useState([]);
  const [player, setPlayer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [playerStats, setPlayerStats] = useState(null);


  //  Fetch games when the component mounts
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/api/games'); // GET request to games route
      setGames(res.data);
    } catch (err) {
      setError('Failed to fetch games');
    } finally {
      setLoading(false);
    }
  };

  const createGame = async () => {
    if (!player) return;
    try {
        const res = await axios.post('http://localhost:5000/api/games', {
            player
        });
        setPlayer('');
        fetchGames();
        fetchPlayerStats();
        alert(`Game started for ${res.data.player}\nHand: ${res.data.hand.join(', ')}\nStatus: ${res.data.status}`);
    } catch (err) {
        setError('Failed to create game');
    }
  };

  const deleteGame = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/games/${id}`);
      fetchGames();
    } catch (err) {
      setError('Failed to delete game');
    }
  };

  const fetchPlayerStats = async () => {
    if (!player) return;
    try {
        const res = await axios.get(`http://localhost:5000/api/players/${player}`);
        setPlayerStats(res.data);
    } catch (err) {
        setError('Failed to fetch player stats');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blackjack Games</h1>

      <input
        type="text"
        placeholder="Player name"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
      />
      <button onClick={createGame} style={{ marginLeft: '10px' }}>Start Game</button>

      {loading && <p>Loading games...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>Games:</h2>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            {game.player} - {game.status} ({new Date(game.createdAt).toLocaleString()})
            <button onClick={() => deleteGame(game._id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {playerStats && (
        <div>
        <h2>Player Stats:</h2>
        <p>Wins: {playerStats.wins}</p>
        <p>Losses: {playerStats.losses}</p>
        </div>
      )}
    </div>
  );
}

export default App;
