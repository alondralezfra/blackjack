function PlayerStats({ stats }) {
  return (
    <div>
      <h2>Player Stats:</h2>
      <p>Wins: {stats.wins}</p>
      <p>Losses: {stats.losses}</p>
    </div>
  );
}

export default PlayerStats;
