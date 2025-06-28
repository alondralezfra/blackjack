function GamesList({ games, deleteGame }) {
  return (
    <div>
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

export default GamesList;