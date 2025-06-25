import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [games, setGames] = useState([]);
  const [player, setPlayer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/api/games');
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
        alert(`Game started for ${res.data.player}. Status: ${res.data.status}`);
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
    </div>
  );
}

export default App;
